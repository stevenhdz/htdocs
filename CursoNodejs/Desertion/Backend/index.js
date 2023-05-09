const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoutes = require('./route');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/predict', registerRoutes);

app.listen(3002, () => {
  console.log('Server started on port 3002');
});