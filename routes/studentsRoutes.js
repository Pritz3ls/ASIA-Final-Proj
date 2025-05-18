const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.get('/count', studentsController.getStudentCount);
router.get('/', studentsController.getAllStudentData);
router.get('/:student_id', studentsController.getStudentDataByID);

module.exports = router;