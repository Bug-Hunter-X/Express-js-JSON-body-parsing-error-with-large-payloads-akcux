const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Increased limit
app.post('/data', (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send('Invalid JSON payload');
  }
  // Perform operations with the data
  console.log(data);
  res.send('Data received');
}).on('error', (err) => {
  console.error('Error handling request:', err);
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});