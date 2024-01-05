const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {

  const parseIp = (req) =>
    req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

  console.log(`Your IP address is: ${parseIp(req)}`)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
