const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4000;

app.use(cors());

// Leer el archivo JSON
app.get('/inventory', (req, res) => {
  const data = require('./data/inventory.json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀 API mock corriendo en http://localhost:${port}`);
});
