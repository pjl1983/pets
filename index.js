const express = require('express');
const morgan = require("morgan");
const path = require('path');
const app = express();
const port = 3000;

// set up morgan middleware
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
