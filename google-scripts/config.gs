/**
 * File: google-scripts/config.gs
 * Purpose: Central data configuration (sheet IDs/names) for the read-only JSON API (Google Apps Script)
 * Notes:
 *  - SHEET_NAME must match your tab name exactly
 *  - SPREADSHEET_ID is taken from the Google Sheets URL
 *  - ALLOWED_ORIGINS is used by the API (optional if you wire it in)
 */
if (typeof DATA_CONFIG === 'undefined') {
  this.DATA_CONFIG = Object.freeze({
    // Your Google Sheet (from: https://docs.google.com/spreadsheets/d/1c7SYj94PXr5ffy8I_lwatpF9Y5kNH16dQAkGeAAa9jo/edit)
    SPREADSHEET_ID: '1c7SYj94PXr5ffy8I_lwatpF9Y5kNH16dQAkGeAAa9jo',

    // The tab that contains interview data
    SHEET_NAME: 'Interviews',

    // Optional: central CORS allowlist (use from your _allowedOrigin_ helper if desired)
    ALLOWED_ORIGINS: [
      'https://aaltoailab.netlify.app',
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ],

    /**
     * Optional: expected header names used by the API. Update if your sheet columns change.
     * This list reflects your current sheet structure.
     */
    EXPECTED_HEADERS: [
      'Timestamp',
      'Reference ID',
      'Name',
      'Role',
      'Department',
      'Email',
      'Years at Company',
      'Current Challenges',
      'Manual Processes',
      'AI Opportunities',
      'Overall Readiness',
      'Technical Score',
      'Cultural Score',
      'Resource Score',
      'Key Insights',
      'Immediate Recommendation',
      'Short-term Recommendation',
      'Strategic Recommendation',
      'Notable Quotes',
      'Interview Date',
      'Duration (min)',
      'Status',
      'Language'
    ]
  });
}

/**
 * Sanity-check: validates that the sheet/tab exists and headers match.
 * Run this manually from the Apps Script editor.
 */
function validateConfig() {
  var sh = SpreadsheetApp.openById(DATA_CONFIG.SPREADSHEET_ID).getSheetByName(DATA_CONFIG.SHEET_NAME);
  if (!sh) throw new Error('Sheet not found: ' + DATA_CONFIG.SHEET_NAME);
  var header = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];

  var missing = (DATA_CONFIG.EXPECTED_HEADERS || []).filter(function (h) {
    return header.indexOf(h) === -1;
  });

  return {
    ok: missing.length === 0,
    found_headers: header,
    missing_headers: missing
  };
}

/**
 * @deprecated Kept for backwards-compatibility; use validateConfig() instead.
 */
function CONFIG_validate_() {
  return validateConfig();
}

// TEMP compatibility alias during migration; remove after all files use DATA_CONFIG
if (typeof CONFIG === 'undefined') {
  this.CONFIG = this.DATA_CONFIG;
}
