const express = require('express');
const path = require('path');
const app = express();
const requestIp = require('request-ip');
const port = 3000;
let IP_ADDRESS = '';

app.use(requestIp.mw())

app.use(function(req, res,next) {
  const clientIp = requestIp.getClientIp(req);
  if (clientIp !== IP_ADDRESS) {
    IP_ADDRESS = clientIp;
    console.log(`Your IP address is: ${IP_ADDRESS}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
