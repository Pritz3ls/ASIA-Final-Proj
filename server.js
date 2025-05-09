// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const salesRoutes = require('./routes/salesRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/api/sales', salesRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});