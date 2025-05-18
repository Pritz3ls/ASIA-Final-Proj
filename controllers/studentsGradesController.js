const db = require('../db');

try {
  exports.getAllStudentGradesCount = (req, res) => {
    db.query('SELECT COUNT(*) FROM student_grades', (err, results) => {
      res.json(results);
    });
  };
  
  exports.getAllStudentsGradesData = (req, res) => {
    db.query('SELECT * FROM student_grades', (err, results) => {
      res.json(results);
    });
  };

  exports.getStudentPassedCount = (req, res) => {
    db.query('SELECT COUNT(*) as total FROM student_grades WHERE remarks = "Passed"', (err, results) => {
      res.json(results);
    });
  };
  exports.getStudentFailedCount = (req, res) => {
    db.query('SELECT COUNT(*) as total FROM student_grades WHERE remarks = "Failed"', (err, results) => {
      res.json(results);
    });
  };
  exports.getPassingPercentage = (req, res) => {
    db.query(`
      SELECT
        ROUND(
          (SELECT COUNT(*) FROM student_grades WHERE remarks = 'Passed') /
          (SELECT COUNT(*) FROM student_grades) * 100, 2
        )
      AS percentage
      `, (err, results) => {
      res.json(results);
    });
  };
  exports.getStudentAverageFinalGrade = (req, res) => {
    db.query('SELECT student_id,subject_id, AVG(grade) AS final_grade FROM student_grades WHERE grading_period IN ("Midterm","Final") GROUP BY student_id, subject_id', (err, results) => {
      res.json(results);
    });
  };
  exports.getOverallAverage = (req, res) => {
    db.query('SELECT ROUND(AVG(grade),2) AS overall_grade_average FROM student_grades WHERE grading_period IN ("Midterm","Final")', (err, results) => {
      res.json(results);
    });
  };
  exports.getOverallSubjectAverage = (req, res) => {
    db.query(`
      SELECT
          student_grades.subject_id,
          subjects.subject_name,
          subjects.subject_code,
      ROUND(AVG(grade),2) AS average_grade_subject
      FROM student_grades
      LEFT JOIN subjects ON subjects.subject_id = student_grades.subject_id
      WHERE grading_period IN ('Midterm','Final')
      GROUP BY subject_id
      `, (err, results) => {
      res.json(results);
    });
  };
  exports.getGradeDistribution = (req, res) => {
    db.query(`
      SELECT 
        CASE
          WHEN grade BETWEEN 75 AND 79 THEN '75-79'
          WHEN grade BETWEEN 80 AND 84 THEN '80-84'
          WHEN grade BETWEEN 85 AND 89 THEN '85-89'
          WHEN grade BETWEEN 90 AND 94 THEN '90-94'
          WHEN grade BETWEEN 95 AND 100 THEN '95-100'
          ELSE 'Below 75'
        END AS grade_range,
        COUNT(*) AS count
      FROM student_grades
      GROUP BY grade_range
      ORDER BY grade_range;
      `, (err, results) => {
      res.json(results);
    });
  };

} catch (err) {
  if (err) return res.status(500).json({ error: err });
  if (results.length === 0) return res.status(404).json({ message: 'Data cannot be found' });
}