/**
 * Read-only JSON API for the website
 * Endpoints (GET):
 *   /exec?action=summary      -> aggregated KPIs
 *   /exec?action=interviews   -> recent N rows (default 50)
 *   /exec?action=health       -> { ok: true }
 *
 * CORS:
 *   - Allows your live site and local dev (Live Server on 5500).
 *   - insights.js appends ?origin=<window.location.origin> to help GAS choose a matching Origin.
 */

/* ---------------------------------------
 * Entry points
 * ------------------------------------- */

/** Handle GET requests */
function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) || 'health';
    var origin = _requestOrigin_(e);                     // e.g., http://127.0.0.1:5500
    var allowOrigin = _allowedOrigin_(origin);           // pick a safe Allow-Origin
    Logger.log('CORS doGet: origin=%s allow=%s action=%s', origin, allowOrigin, action);

    var payload;
    if (action === 'summary') {
      payload = _computeSummary_();
    } else if (action === 'interviews') {
      var limit = Number(e && e.parameter && e.parameter.limit || 50);
      payload = _getInterviews_(limit);
    } else {
      payload = { ok: true, message: 'Aalto Discovery API is alive' };
    }

    var out = ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);

    _setHeaders_(out, {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
      'Vary': 'Origin',
    });

    return out;

  } catch (err) {
    var outErr = ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);

    _setHeaders_(outErr, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    return outErr;
  }
}

/** (Optional) Handle preflight if a browser sends it (not needed for our simple GETs) */
function doOptions(e) {
  var origin = _requestOrigin_(e);
  var allowOrigin = _allowedOrigin_(origin);
  Logger.log('CORS doOptions: origin=%s allow=%s', origin, allowOrigin);
  var out = ContentService.createTextOutput('');
  _setHeaders_(out, {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '600',
    'Vary': 'Origin'
  });
  return out;
}

/* ---------------------------------------
 * Data access helpers
 * ------------------------------------- */

function _sheet_() {
  var ss = SpreadsheetApp.openById(DATA_CONFIG.SPREADSHEET_ID);
  var sh = ss.getSheetByName(DATA_CONFIG.SHEET_NAME);
  if (!sh) throw new Error('Sheet not found: ' + DATA_CONFIG.SHEET_NAME);
  return sh;
}

function _rows_() {
  var values = _sheet_().getDataRange().getValues(); // [[h1,h2,...],[r1c1,r1c2,...],...]
  if (!values || values.length < 2) return [];        // no rows beyond header
  var header = values.shift();
  return values.map(function (row) {
    var o = {};
    for (var i = 0; i < header.length; i++) o[header[i]] = row[i];
    return o;
  });
}

/** Return recent interviews, most recent first */
function _getInterviews_(limit) {
  var limitNum = Math.max(1, Number(limit || 50));
  var rows = _rows_();

  rows.sort(function (a, b) {
    // Timestamp column should be a Date; if string, Date(...) still works
    return new Date(b['Timestamp']) - new Date(a['Timestamp']);
  });

  return {
    ok: true,
    count: rows.length,
    items: rows.slice(0, limitNum)
  };
}

/** Build a compact summary for KPIs + simple challenge keywords */
function _computeSummary_() {
  var rows = _rows_();
  if (!rows.length) return { ok: true, items: 0 };

  var pick = function (k) { return rows.map(function (r) { return r[k]; }); };

  var readiness = pick('Overall Readiness'); // expected: 'low' | 'medium' | 'high'
  var tech = pick('Technical Score').map(Number).filter(_isFinite_);
  var cult = pick('Cultural Score').map(Number).filter(_isFinite_);
  var res  = pick('Resource Score').map(Number).filter(_isFinite_);

  var dist = function (arr) {
    return arr.reduce(function (acc, v) {
      var key = String(v || '').toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };

  var avg = function (arr) {
    if (!arr.length) return null;
    var s = arr.reduce(function (a, b) { return a + b; }, 0);
    return Math.round((s / arr.length) * 10) / 10; // 1 decimal place
  };

  // Tokenize 'Current Challenges' (supports strings, JSON arrays, or array cells)
  var rawChallenges = pick('Current Challenges').filter(Boolean);
  var challengeTexts = [];
  rawChallenges.forEach(function (val) {
    if (Array.isArray(val)) {
      challengeTexts.push(val.join(' '));
      return;
    }
    var s = String(val).trim();
    if (s && s.charAt(0) === '[') {
      try {
        var arr = JSON.parse(s);
        if (Array.isArray(arr)) {
          challengeTexts.push(arr.join(' '));
          return;
        }
      } catch (e) { /* fall through to plain string */ }
    }
    challengeTexts.push(s);
  });
  var tokens = {};
  challengeTexts.forEach(function (txt) {
    String(txt).toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(function (w) { return w && w.length > 3; })
      .forEach(function (w) { tokens[w] = (tokens[w] || 0) + 1; });
  });
  var topWords = Object.keys(tokens)
    .map(function (w) { return { word: w, count: tokens[w] }; })
    .sort(function (a, b) { return b.count - a.count; })
    .slice(0, 10);

  return {
    ok: true,
    items: rows.length,
    readiness: dist(readiness), // { high: n, medium: n, low: n }
    technical_avg: avg(tech),
    cultural_avg:  avg(cult),
    resource_avg:  avg(res),
    top_challenge_words: topWords
  };
}

/* ---------------------------------------
 * CORS helpers
 * ------------------------------------- */

/** Derive an origin from query param (?origin=...), else empty */
function _requestOrigin_(e) {
  return (e && e.parameter && e.parameter.origin) || '';
}

/** Allowlist dev + prod from DATA_CONFIG; default to prod domain */
function _allowedOrigin_(origin) {
  var list = (typeof DATA_CONFIG !== 'undefined' && DATA_CONFIG.ALLOWED_ORIGINS) || [];
  if (origin && list.indexOf(origin) !== -1) return origin;
  // Fallback to first configured origin or the Netlify domain
  return list[0] || 'https://aaltoailab.netlify.app';
}

/**
 * NOTE: Apps Script ContentService.TextOutput does not support arbitrary response headers (e.g., CORS).
 * This endpoint is intended to be consumed via the Netlify Function proxy, which can set headers server‑side.
 * Leaving this as a no‑op avoids runtime errors like: "TypeError: textOutput.setHeader is not a function".
 */
function _setHeaders_(textOutput, headers) {
  // no-op
}

/* ---------------------------------------
 * Small utilities
 * ------------------------------------- */
function _isFinite_(n) {
  return typeof n === 'number' && isFinite(n);
}
