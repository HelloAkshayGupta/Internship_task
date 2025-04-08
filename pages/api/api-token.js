// pages/api/save-token.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { token, userEmail } = req.body;
      console.log('Save Token:', token, userEmail);
      // Store token in DB (MongoDB / Firestore)
      res.status(200).json({ success: true });
    } else {
      res.status(405).end();
    }
  }
  