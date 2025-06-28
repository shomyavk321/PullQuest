const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config(); // Loads .env file

const app = express();
app.use(cors());
app.use(express.json());

// GitHub OAuth route
app.post('/auth/github', async (req, res) => {
  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const redirectURI = process.env.REDIRECT_URI;

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientID,
        client_secret: clientSecret,
        code: req.body.code,
        redirect_uri: redirectURI,
      }),
    });

    const data = await tokenResponse.json();

    console.log('✅ GitHub token response:', data);
    res.json(data); // Send the token or error message to frontend
  } catch (err) {
    console.error('❌ Error exchanging token:', err);
    res.status(500).json({ error: 'Failed to exchange token' });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
