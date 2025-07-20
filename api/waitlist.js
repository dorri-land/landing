const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Load service account credentials
const keyPath = path.join(__dirname, '../service-account.json'); // Place your service-account.json in the project root
const keys = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let email;
  try {
    email = req.body.email || (typeof req.body === 'string' ? JSON.parse(req.body).email : undefined);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    const client = await auth.getClient();
    const spreadsheetId = '140ELPHQBQN45JloXBkN2vhfayqYsivEXggU6p2KVRzo'; // <-- Replace with your Sheet ID
    const range = 'Sheet1!A:B'; // Adjust as needed

    await sheets.spreadsheets.values.append({
      auth: client,
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toISOString(), email]],
      },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 