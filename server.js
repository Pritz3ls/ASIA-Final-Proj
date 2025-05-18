// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const courseRoutes = require('./routes/courseRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const studentsGradesRoutes = require('./routes/studentGradesRoutes');
const studentsSubjectsRoutes = require('./routes/studentsSubjectsRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// Course
app.use('/api/course', courseRoutes);
// Students
app.use('/api/students', studentsRoutes);
// Student Grades
app.use('/api/studentsGrades', studentsGradesRoutes);
// Student Subjects
app.use('/api/studentsSubjects', studentsSubjectsRoutes);
// Subjects
app.use('/api/subjects', subjectRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/api/students`);
});