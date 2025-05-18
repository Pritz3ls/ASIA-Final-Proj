const express = require('express');
const router = express.Router();
const studentsSubjectsController = require('../controllers/studentsSubjectsController');

router.get('/', studentsSubjectsController.getAllStudentsSubjectsData);

module.exports = router;