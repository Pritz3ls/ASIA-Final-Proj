const express = require('express');
const router = express.Router();
const studentsGradesController = require('../controllers/studentsGradesController');

router.get('/', studentsGradesController.getAllStudentsGradesData);
router.get('/count', studentsGradesController.getAllStudentGradesCount);
router.get('/count/passed', studentsGradesController.getStudentPassedCount);
router.get('/count/failed', studentsGradesController.getStudentFailedCount);
router.get('/percentage', studentsGradesController.getPassingPercentage);
router.get('/avg/grade', studentsGradesController.getStudentAverageFinalGrade);
router.get('/avg/overall', studentsGradesController.getOverallAverage);
router.get('/avg/subject', studentsGradesController.getOverallSubjectAverage);
router.get('/distribution/', studentsGradesController.getGradeDistribution);

module.exports = router;