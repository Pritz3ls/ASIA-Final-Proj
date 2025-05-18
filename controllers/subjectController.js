const db = require('../db');

try {
  exports.getAllSubjectsData = (req, res) => {
    db.query('SELECT * FROM subjects', (err, results) => {
      res.json(results);
    });
  };
  
} catch (err) {
  if (err) return res.status(500).json({ error: err });
  if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
}