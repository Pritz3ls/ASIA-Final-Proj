const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getAllCoursesData);
router.get('/:course_id', courseController.getCourseByID);
router.get('/students/:course_id', courseController.getCourseTotalStudentsByID);
router.get('/students/:course_id', courseController.getCourseStudentsData);
router.get('/total/students', courseController.getCourseOverallStudents);
router.get('/total/avg', courseController.getCourseSubjectAverageGrade);

module.exports = router;