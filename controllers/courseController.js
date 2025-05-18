const db = require('../db');

exports.getAllCoursesData = (req, res) => {
  try {
    db.query('SELECT * FROM courses', (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};
exports.getCourseByID = (req, res) => {
  try {
    db.query('SELECT * FROM courses WHERE course_id = ?',[req.params.course_id], (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};
exports.getCourseTotalStudentsByID = (req, res) => {
  try {
    db.query(`
      SELECT
        COUNT(*) as course_total_students,
        courses.course_id,
        courses.course_name
        FROM students
      JOIN courses ON courses.course_id = students.course_id
      WHERE courses.course_id = ?
      `,[req.params.course_id], (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};
exports.getCourseStudentsData = (req, res) => {
  try {
    db.query(`
      SELECT * FROM students
      JOIN courses ON courses.course_id = students.course_id
      WHERE students.course_id = ?
      `,[req.params.course_id], (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};
exports.getCourseOverallStudents = (req, res) => {
  try {
    db.query(`
      SELECT
        COUNT(*) as course_total_students,
        courses.course_name,
        courses.course_id
        FROM courses
      JOIN students ON courses.course_id = students.course_id
      GROUP BY course_id
      `, (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};

exports.getCourseSubjectAverageGrade = (req, res) => {
  try {
    db.query(`
      SELECT c.course_name, s.subject_name, ROUND(AVG(g.grade), 2) AS avg_grade
      FROM student_grades g
      JOIN students st ON g.student_id = st.student_id
      JOIN courses c ON st.course_id = c.course_id
      JOIN subjects s ON g.subject_id = s.subject_id
      GROUP BY c.course_name, s.subject_name;
      `, (err, results) => {
      res.json(results);
    });
  } catch (err) {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
  }
};