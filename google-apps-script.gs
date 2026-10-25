// Paste this into Extensions > Apps Script of a Google Sheet, then deploy as a Web app.
// Sheet header row (row 1): Time | Name | Major | College (AR) | College (EN) | Language

var NOTIFY_EMAIL = ''; // put your email here to get a message for every new registration, e.g. 'you@gmail.com'

function safe(v) {
  v = String(v || '').slice(0, 100);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // blocks spreadsheet formula injection
}

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sh.appendRow([new Date(), safe(d.name), safe(d.major), safe(d.collegeAr), safe(d.college), safe(d.lang)]);
    if (NOTIFY_EMAIL) {
      var total = sh.getLastRow() - 1;
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        'New Sadeem registration #' + total,
        'Name: ' + d.name + '\nMajor: ' + d.major + '\nCollege: ' + d.collegeAr + ' / ' + d.college + '\nTotal registered: ' + total
      );
    }
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}

var ADMIN_KEY = 'CHANGE_ME_TO_A_LONG_SECRET'; // only you know this; used by admin.html to read the list

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var k = e && e.parameter && e.parameter.key;
  if (k) {
    if (ADMIN_KEY === 'CHANGE_ME_TO_A_LONG_SECRET' || k !== ADMIN_KEY) return json({ error: 'denied' });
    var rows = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getDataRange().getValues().slice(1);
    return json({ rows: rows });
  }
  return ContentService.createTextOutput('Sadeem endpoint is live');
}
