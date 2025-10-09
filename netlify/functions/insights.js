// Netlify Function: Proxy to Google Apps Script (read-only Insights API)
// Purpose: Same-origin endpoint at /api/insights so the browser never hits GAS directly.
// Usage from the site:  GET /api/insights?action=summary|interviews&limit=50

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW/exec";

// Basic CORS headers (safe for read-only data; same-origin calls don't need it, but harmless)
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async (event) => {
  try {
    // Handle preflight if a client sends it (e.g., tools or external dashboards)
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 204, headers: { ...cors, "Vary": "Origin" } };
    }

    // Build upstream query string
    const params = new URLSearchParams(event.queryStringParameters || {});
    if (!params.has("action")) params.set("action", "summary");

    // Pass a sensible origin for Apps Script logging/allowlisting
    const host = event.headers?.host ? `https://${event.headers.host}` : "";
    if (!params.has("origin") && host) params.set("origin", host);

    const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

    const upstream = await fetch(url, {
      method: "GET",
      headers: { "accept": "application/json" },
    });

    const text = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") || "application/json; charset=utf-8";

    return {
      statusCode: upstream.status,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store",
        "Vary": "Origin",
        ...cors,
      },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json", ...cors },
      body: JSON.stringify({
        ok: false,
        error: "Proxy request failed",
        detail: String(err),
      }),
    };
  }
};
