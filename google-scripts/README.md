# Google Apps Script Setup for Insights Page

This directory contains the Google Apps Script files that power the Insights page data backend.

## Overview

The Insights page pulls live interview data from a Google Sheets spreadsheet using Google Apps Script as a backend API. The data flows through:

1. **Google Sheets** - Stores interview data
2. **Google Apps Script** - Provides JSON API endpoints
3. **Netlify Function** - Proxies requests to avoid CORS issues
4. **React Insights Page** - Displays the data

## Files

- **code.gs** - Main POST endpoint for receiving interview data from GPT
- **api_get.gs** - Read-only GET endpoints for the Insights page
- **config.gs** - Configuration (spreadsheet ID, sheet names, CORS settings)

## Setup Instructions

### 1. Create/Access Your Google Sheet

1. Open the Google Sheet you want to use for storing interview data
2. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```

### 2. Open Apps Script Editor

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This opens the Google Apps Script editor

### 3. Add the Script Files

1. **Delete the default `Code.gs`** file
2. Create three new script files:
   - **config.gs** - Click the **+** next to Files, choose Script
   - **code.gs** - Click the **+** next to Files, choose Script
   - **api_get.gs** - Click the **+** next to Files, choose Script

3. Copy the contents from this directory into each corresponding file

### 4. Configure Your Settings

In **config.gs**, update the following:

```javascript
SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
SHEET_NAME: 'Interviews', // Or your sheet tab name
ALLOWED_ORIGINS: [
  'https://aaltoailab.netlify.app',
  'http://localhost:5173', // For local development
  'http://127.0.0.1:5173'
]
```

In **code.gs**, update:

```javascript
NOTIFICATION_EMAIL: 'your-email@example.com',
```

### 5. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Aalto Energia Insights API"
   - **Execute as**: Me (your-email@domain.com)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** - you'll need this!
   - Current deployment URL: `https://script.google.com/macros/s/AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW/exec`
   - Deployment ID: `AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW`

### 6. Test the Deployment

Run these test functions from the Apps Script editor:

1. Click on `testLink` function and click **Run**
   - Check the Execution log to verify spreadsheet connection
2. Click on `validateConfig` function and click **Run**
   - Verifies sheet headers match expected structure

### 7. Update Netlify Function

In your project's `netlify/functions/insights.js`, update the `APPS_SCRIPT_URL`:

```javascript
const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW/exec";
```

**Better approach:** Add as environment variable in Netlify:

1. Go to Netlify dashboard → Site settings → Environment variables
2. Add variable:
   - **Key**: `APPS_SCRIPT_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW/exec`

### 8. Update the Insights Page

In `src/pages/Insights.tsx`, the fallback URL for local development should be updated:

```typescript
const API = import.meta.env.PROD
  ? '/api/insights'
  : 'YOUR_WEB_APP_URL_HERE';
```

## API Endpoints

Once deployed, your Apps Script provides these endpoints:

### GET Endpoints (Read-only)

**Health Check:**
```
GET https://script.google.com/.../exec?action=health
```

**Summary (KPIs):**
```
GET https://script.google.com/.../exec?action=summary
```
Returns:
```json
{
  "ok": true,
  "items": 42,
  "readiness": { "high": 10, "medium": 20, "low": 12 },
  "technical_avg": 3.2,
  "cultural_avg": 3.8,
  "resource_avg": 2.9
}
```

**Recent Interviews:**
```
GET https://script.google.com/.../exec?action=interviews&limit=25
```
Returns:
```json
{
  "ok": true,
  "count": 42,
  "items": [
    {
      "Timestamp": "2025-01-15T10:30:00Z",
      "Reference ID": "INT-20250115-ABC-123",
      "Name": "John Doe",
      "Role": "Manager",
      ...
    }
  ]
}
```

### POST Endpoint (Write)

**Submit Interview:**
```
POST https://script.google.com/.../exec
Content-Type: application/json

{
  "participant": { ... },
  "responses": { ... },
  "summary": { ... },
  "metadata": { ... }
}
```

## Sheet Structure

The script expects these columns in your "Interviews" sheet:

| Column | Type | Description |
|--------|------|-------------|
| Timestamp | Date | Auto-generated timestamp |
| Reference ID | String | Unique interview identifier |
| Name | String | Participant name |
| Role | String | Job role |
| Department | String | Department |
| Email | String | Email address |
| Years at Company | Number | Years of service |
| Current Challenges | JSON Array | List of challenges |
| Manual Processes | JSON Array | Manual process descriptions |
| AI Opportunities | JSON Array | Identified opportunities |
| Overall Readiness | String | "high", "medium", or "low" |
| Technical Score | Number | 1-5 score |
| Cultural Score | Number | 1-5 score |
| Resource Score | Number | 1-5 score |
| Key Insights | JSON Array | Main takeaways |
| Immediate Recommendation | String | Quick wins |
| Short-term Recommendation | String | 3-6 month actions |
| Strategic Recommendation | String | Long-term strategy |
| Notable Quotes | JSON Array | Key quotes |
| Interview Date | Date | When interview occurred |
| Duration (min) | Number | Interview length |
| Status | String | "complete", "partial", etc. |
| Language | String | Interview language code |

## Troubleshooting

### CORS Issues
- Ensure your site's domain is in `ALLOWED_ORIGINS` in config.gs
- Redeploy the Apps Script after config changes

### Data Not Showing
1. Check Apps Script execution logs (View → Executions)
2. Verify spreadsheet ID is correct
3. Test with the `testLink()` function
4. Check browser console for errors

### Permission Errors
- Apps Script must be deployed as "Execute as: Me"
- You need edit access to the spreadsheet

### Function Not Found
- Ensure all three .gs files are added to the project
- Files must be named exactly: config.gs, code.gs, api_get.gs

## Development Workflow

1. Make changes to .gs files in Apps Script editor
2. **Save** the changes (Ctrl+S / Cmd+S)
3. Create a **New Deployment** (Deploy → Manage deployments → Edit → New version)
4. Test endpoints directly or through the Insights page

## Security Notes

- The GET endpoints are read-only and safe for public access
- Consider adding authentication for the POST endpoint if needed
- Email notifications are sent to the configured address
- Spreadsheet data should follow your organization's data policies

## Support

For issues with:
- **Google Apps Script**: Check execution logs in Apps Script editor
- **Netlify Functions**: Check Netlify function logs
- **React Page**: Check browser console

---

**Author**: Andrew Kilshaw, TalentOptima Ltd
**Version**: 1.0
**Last Updated**: 2025
