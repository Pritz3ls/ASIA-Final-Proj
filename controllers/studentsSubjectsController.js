const db = require('../db');

exports.getAllStudentsSubjectsData = (req, res) => {
  try {
    db.query('SELECT * FROM student_subjects', (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};

exports.getTotalStudentsSemester = (req, res) => {
  try {
    db.query(`
      SELECT semester, COUNT(*) AS total
      FROM student_subjects
      WHERE semester IN ('1st Semester','2nd Semester','3rd Semester','4th Semester')
      GROUP BY semester DESC
      `, (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};

// exports.getTotalStudentsSemester = (req, res) => {
//   try {
//     db.query(`
//       SELECT semester, COUNT(*) AS total
//       FROM student_subjects
//       WHERE semester IN ('1st Semester','2nd Semester','3rd Semester','4th Semester')
//       GROUP BY semester DESC
//       `, (err, results) => {
//       res.json(results);
//     });
//   } catch (err) {
//     if (err) return res.status(500).json({ error: err });
//     if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
//   }
// };