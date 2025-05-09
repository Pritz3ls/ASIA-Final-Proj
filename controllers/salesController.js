// controllers/salesController.js
const db = require('../db');

exports.getSalesData = (req, res) => {
  db.query('SELECT * FROM sales', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};