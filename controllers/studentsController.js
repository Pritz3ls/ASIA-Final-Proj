const db = require('../db');

try{
  exports.getAllStudentData = (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
      res.json(results);
    });
  };
  
  exports.getStudentCount = (req, res) => {
    db.query('SELECT COUNT(*) AS total FROM students', (err, results) => {
      res.json(results);
    });
  };
  
  exports.getStudentDataByID = (req, res) => {
    db.query('SELECT * FROM students WHERE student_id = ?', [req.params.student_id], (err, results) => {
      res.json(results[0]);
    });
  };

}catch (err){
  if (err) return res.status(500).json({ error: err });
  if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
}


