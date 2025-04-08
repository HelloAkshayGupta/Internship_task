// pages/api/send-notification.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { fcmToken, title, body } = req.body;

  if (!fcmToken || !title || !body) {
    return res.status(400).json({ message: 'Missing parameters' });
  }

  const serverKey = process.env.FCM_SERVER_KEY;  // Store in .env.local

  const message = {
    to: fcmToken,
    notification: {
      title: title,
      body: body,
    },
  };

  const response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      'Authorization': `key=${serverKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  if (response.status === 200) {
    res.status(200).json({ message: 'Notification sent successfully' });
  } else {
    res.status(response.status).json({ message: 'Failed to send notification' });
  }
}
