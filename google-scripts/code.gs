// File: google-apps-script.js
// Path: /google-apps-script.js
// Purpose: Complete Google Apps Script code for Aalto Energia Discovery GPT backend
// Instructions: Copy this entire code into Google Sheets Script Editor and deploy as Web App

/**
 * Aalto Energia AI Discovery Interview System
 * Google Apps Script Backend
 * Version: 1.0
 * Author: Andrew Kilshaw, TalentOptima Ltd
 *
 * Setup Instructions:
 * 1. Open Google Sheets
 * 2. Tools → Script editor
 * 3. Delete default code
 * 4. Paste this entire script
 * 5. Save with name "AI Discovery Backend"
 * 6. Deploy → New Deployment → Web app
 * 7. Execute as: Me, Access: Anyone
 * 8. Copy the deployment URL for your GPT
 */

// Configuration - Update these values
const APP_CONFIG = {
  NOTIFICATION_EMAIL: 'andrew@talentoptima.com', // Change to your email
  SHEET_NAME: 'Interviews',
  SUMMARY_SHEET: 'Summary',
  SEND_NOTIFICATIONS: true,
  TIMEZONE: 'Europe/Helsinki'
};

const SPREADSHEET_ID =
  (typeof DATA_CONFIG !== 'undefined' && DATA_CONFIG.SPREADSHEET_ID) ||
  '1c7SYj94PXr5ffy8I_lwatpF9Y5kNH16dQAkGeAAa9jo';

/**
 * Main POST endpoint for receiving interview data from GPT
 */
function doPost(e) {
  // Safety check for manual testing
  if (!e || !e.postData) {
    return ContentService
      .createTextOutput(JSON.stringify({
        error: "No data provided - use testScript() for testing",
        hint: "Run testScript() function instead of doPost() directly"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    // Parse incoming data
    const requestData = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!validateRequest(requestData)) {
      return createErrorResponse('Invalid request data');
    }

    // Get or create sheets - Using specific spreadsheet ID
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const interviewSheet = getOrCreateSheet(ss, APP_CONFIG.SHEET_NAME);
    const summarySheet = getOrCreateSheet(ss, APP_CONFIG.SUMMARY_SHEET);

    // Generate unique reference ID
    const referenceId = generateReferenceId(requestData.participant.name);

    // Process and store interview data
    const rowData = processInterviewData(requestData, referenceId);
    interviewSheet.appendRow(rowData);

    // Update summary statistics
    updateSummaryStats(summarySheet, requestData);

    // Send notification if enabled
    if (APP_CONFIG.SEND_NOTIFICATIONS) {
      sendEmailNotification(requestData, referenceId);
    }

    // Log for debugging
    console.log('Interview processed:', referenceId);

    // Return success response
    return createSuccessResponse(referenceId);

  } catch (error) {
    console.error('Error processing interview:', error);
    return createErrorResponse(error.toString());
  }
}

/**
 * GET endpoint for testing API status
 */
function statusPage() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Aalto AI Discovery API</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #0047AB, #4CAF50);
            color: white;
          }
          h1 { color: white; }
          .status {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .badge {
            background: #4CAF50;
            padding: 5px 10px;
            border-radius: 4px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Aalto Energia AI Discovery API</h1>
        <div class="status">
          <p>Status: <span class="badge">ACTIVE</span></p>
          <p>Version: 1.0</p>
          <p>Purpose: Captures diagnostic interview data from Custom GPT</p>
          <p>Endpoint: POST to this URL</p>
        </div>
        <p>© 2025 TalentOptima Ltd</p>
      </body>
    </html>
  `;

  return HtmlService.createHtmlOutput(html);
}

/**
 * Validate incoming request has required fields
 */
function validateRequest(data) {
  return !!(
    data.participant &&
    data.participant.name &&
    data.participant.role &&
    data.responses &&
    data.summary &&
    data.metadata
  );
}

/**
 * Generate unique reference ID
 */
function generateReferenceId(name) {
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);

  const date = Utilities.formatDate(
    new Date(),
    APP_CONFIG.TIMEZONE,
    'yyyyMMdd'
  );

  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  return `INT-${date}-${initials}-${random}`;
}

/**
 * Process interview data into spreadsheet row format
 */
function processInterviewData(data, referenceId) {
  return [
    new Date(), // Timestamp
    referenceId, // Reference ID
    data.participant.name || '',
    data.participant.role || '',
    data.participant.department || '',
    data.participant.email || '',
    data.participant.yearsAtCompany || '',

    // Responses
    JSON.stringify(data.responses.currentChallenges || []),
    JSON.stringify(data.responses.manualProcesses || []),
    JSON.stringify(data.responses.aiOpportunities || []),
    data.responses.aiReadiness?.overall || '',
    data.responses.aiReadiness?.technical || '',
    data.responses.aiReadiness?.cultural || '',
    data.responses.aiReadiness?.resource || '',

    // Summary
    JSON.stringify(data.summary.keyInsights || []),
    data.summary.recommendations?.immediate || '',
    data.summary.recommendations?.shortTerm || '',
    data.summary.recommendations?.strategic || '',
    JSON.stringify(data.summary.notableQuotes || []),

    // Metadata
    data.metadata.interviewDate || new Date(),
    data.metadata.duration || 0,
    data.metadata.completionStatus || 'complete',
    data.metadata.language || 'en'
  ];
}

/**
 * Get or create a sheet with proper headers
 */
function getOrCreateSheet(spreadsheet, sheetName) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);

    // Add headers based on sheet type
    if (sheetName === APP_CONFIG.SHEET_NAME) {
      const headers = [
        'Timestamp', 'Reference ID', 'Name', 'Role', 'Department', 'Email',
        'Years at Company', 'Current Challenges', 'Manual Processes',
        'AI Opportunities', 'Overall Readiness', 'Technical Score',
        'Cultural Score', 'Resource Score', 'Key Insights',
        'Immediate Recommendation', 'Short-term Recommendation',
        'Strategic Recommendation', 'Notable Quotes', 'Interview Date',
        'Duration (min)', 'Status', 'Language'
      ];

      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    if (sheetName === APP_CONFIG.SUMMARY_SHEET) {
      const headers = [
        'Metric', 'Value', 'Last Updated'
      ];

      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

      // Initialize summary metrics
      const metrics = [
        ['Total Interviews', 0, new Date()],
        ['Average Readiness Score', 'N/A', new Date()],
        ['High Readiness %', '0%', new Date()],
        ['Medium Readiness %', '0%', new Date()],
        ['Low Readiness %', '0%', new Date()],
        ['Average Duration', '0 min', new Date()],
        ['Departments Covered', 0, new Date()],
        ['This Week', 0, new Date()],
        ['This Month', 0, new Date()]
      ];

      sheet.getRange(2, 1, metrics.length, 3).setValues(metrics);
    }
  }

  return sheet;
}

/**
 * Update summary statistics
 */
function updateSummaryStats(summarySheet, data) {
  try {
    // Get current stats
    const range = summarySheet.getDataRange();
    const values = range.getValues();

    // Update total interviews
    const totalRow = values.findIndex(row => row[0] === 'Total Interviews');
    if (totalRow > -1) {
      values[totalRow][1] = (parseInt(values[totalRow][1]) || 0) + 1;
      values[totalRow][2] = new Date();
    }

    // Update other metrics as needed
    // This is simplified - expand based on your needs

    // Write back to sheet
    range.setValues(values);
  } catch (error) {
    console.error('Error updating summary:', error);
  }
}

/**
 * Send email notification about new interview
 */
function sendEmailNotification(data, referenceId) {
  try {
    const subject = `🎯 New AI Discovery Interview: ${data.participant.name}`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
        <div style="background: linear-gradient(135deg, #0047AB, #4CAF50); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; color: white;">New AI Discovery Interview Completed</h2>
        </div>

        <div style="padding: 20px; background: #f8f9fa; border: 1px solid #ddd; border-top: 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px;">Reference ID:</td>
              <td style="padding: 8px;">${referenceId}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 8px; font-weight: bold;">Participant:</td>
              <td style="padding: 8px;">${data.participant.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Role:</td>
              <td style="padding: 8px;">${data.participant.role}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 8px; font-weight: bold;">Department:</td>
              <td style="padding: 8px;">${data.participant.department || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">AI Readiness:</td>
              <td style="padding: 8px;">
                <span style="background: ${getReadinessColor(data.responses.aiReadiness?.overall)};
                            color: white; padding: 4px 8px; border-radius: 4px;">
                  ${data.responses.aiReadiness?.overall || 'Not assessed'}
                </span>
              </td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 8px; font-weight: bold;">Duration:</td>
              <td style="padding: 8px;">${data.metadata.duration || '?'} minutes</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h3 style="color: #0047AB; margin-top: 0;">Key Insights</h3>
            <ul style="color: #333;">
              ${(data.summary.keyInsights || []).map(insight =>
                `<li style="margin-bottom: 5px;">${insight}</li>`
              ).join('')}
            </ul>
          </div>

          ${data.summary.recommendations?.immediate ? `
          <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 4px; border-left: 4px solid #4CAF50;">
            <h4 style="color: #2e7d32; margin-top: 0;">Immediate Opportunity</h4>
            <p style="color: #333; margin: 0;">${data.summary.recommendations.immediate}</p>
          </div>
          ` : ''}

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666;">
            <p style="margin: 5px 0;">View full data in the spreadsheet</p>
            <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}"
               style="display: inline-block; margin-top: 10px; padding: 10px 20px;
                      background: #0047AB; color: white; text-decoration: none;
                      border-radius: 4px;">Open Spreadsheet</a>
          </div>
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: APP_CONFIG.NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });

    console.log('Notification sent to:', APP_CONFIG.NOTIFICATION_EMAIL);

  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

/**
 * Get color for readiness level
 */
function getReadinessColor(readiness) {
  switch(readiness?.toLowerCase()) {
    case 'high': return '#4CAF50';
    case 'medium': return '#FF9800';
    case 'low': return '#f44336';
    default: return '#9E9E9E';
  }
}

/**
 * Create success response
 */
function createSuccessResponse(referenceId) {
  const response = {
    success: true,
    referenceId: referenceId,
    message: 'Interview successfully captured and processed',
    nextSteps: 'Your insights will be analyzed and included in the AI Catalyst Session preparation. Thank you for your valuable input.',
    timestamp: new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Create error response
 */
function createErrorResponse(errorMessage) {
  const response = {
    success: false,
    error: errorMessage,
    message: 'There was an issue processing the interview. Please try again or contact support.',
    timestamp: new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Utility function to test the script
 * Run this function to test your setup
 */
function testScript() {
  const testData = {
    participant: {
      name: "Test User",
      role: "Test Manager",
      department: "Operations",
      email: "test@aalto.fi"
    },
    responses: {
      currentChallenges: ["Manual processes", "Data silos"],
      aiOpportunities: [
        {
          area: "Customer Service",
          description: "Implement chatbot",
          impact: "high",
          timeframe: "immediate"
        }
      ],
      aiReadiness: {
        overall: "medium",
        technical: 3,
        cultural: 4,
        resource: 3
      }
    },
    summary: {
      keyInsights: [
        "Strong leadership support for AI",
        "Need for better data infrastructure",
        "Quick wins available in customer service"
      ],
      recommendations: {
        immediate: "Deploy customer service chatbot",
        shortTerm: "Implement demand forecasting",
        strategic: "Build comprehensive data platform"
      }
    },
    metadata: {
      interviewDate: new Date().toISOString(),
      duration: 15,
      completionStatus: "complete"
    }
  };

  // Simulate POST request
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const response = doPost(e);
  console.log('Test response:', response.getContent());
}

/**
 * Generate analytics report
 * Schedule this to run weekly/monthly
 */
function generateAnalyticsReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(APP_CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  // Skip header row
  const interviews = data.slice(1);

  // Calculate metrics
  const metrics = {
    total: interviews.length,
    thisWeek: interviews.filter(row => {
      const date = new Date(row[0]);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date > weekAgo;
    }).length,
    departments: [...new Set(interviews.map(row => row[4]))].filter(d => d),
    averageReadiness: calculateAverageReadiness(interviews),
    topChallenges: extractTopItems(interviews, 7),
    topOpportunities: extractTopItems(interviews, 9)
  };

  console.log('Analytics Report:', metrics);
  return metrics;
}

/**
 * Calculate average readiness from interviews
 */
function calculateAverageReadiness(interviews) {
  const scores = { high: 3, medium: 2, low: 1 };
  const validScores = interviews
    .map(row => scores[row[10]?.toLowerCase()])
    .filter(score => score);

  if (validScores.length === 0) return 'N/A';

  const average = validScores.reduce((a, b) => a + b, 0) / validScores.length;

  if (average >= 2.5) return 'High';
  if (average >= 1.5) return 'Medium';
  return 'Low';
}

/**
 * Extract top items from JSON columns
 */
function extractTopItems(interviews, columnIndex) {
  const items = {};

  interviews.forEach(row => {
    try {
      const data = JSON.parse(row[columnIndex] || '[]');
      data.forEach(item => {
        const key = typeof item === 'string' ? item : item.area || item.description;
        if (key) {
          items[key] = (items[key] || 0) + 1;
        }
      });
    } catch (e) {
      // Skip invalid JSON
    }
  });

  return Object.entries(items)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([item, count]) => ({ item, count }));
}

/**
 * Initialize the spreadsheet with all necessary sheets
 * Run this once when setting up
 */
function initializeSpreadsheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  // Create Interview sheet
  getOrCreateSheet(ss, APP_CONFIG.SHEET_NAME);

  // Create Summary sheet
  getOrCreateSheet(ss, APP_CONFIG.SUMMARY_SHEET);

  // Format spreadsheet
  ss.rename('Aalto Energia AI Discovery Interviews');

  console.log('Spreadsheet initialized successfully!');
  console.log('Spreadsheet URL:', ss.getUrl());
}

/**
 * Test connection to specific spreadsheet
 * Run this to verify the script is linked correctly
 */
function testLink() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  console.log('✅ Connected to spreadsheet:', ss.getName());
  console.log('📊 Spreadsheet URL:', ss.getUrl());
  console.log('📋 Number of sheets:', ss.getSheets().length);

  // List all sheets
  ss.getSheets().forEach(sheet => {
    console.log('  - Sheet:', sheet.getName());
  });

  return 'Connection successful!';
}

// End of script
