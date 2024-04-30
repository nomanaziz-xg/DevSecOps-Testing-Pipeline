const express = require('express')
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express()
const port = 3000

// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// POST endpoint for generating MD5 hash of a password
app.post('/getPasswordHash', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required in the request body' });
  }

  // Generate MD5 hash of the password
  const md5Hash = crypto.createHash('md5').update(password).digest('hex');

  res.json({ passwordHash: md5Hash });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})