const express = require('express');
const joinController = require('../controllers/join_controller')
const passport = require('passport');

const router = express.Router();


router.get('/medReg',joinController.medReg);
router.get('/ambReg',joinController.ambReg);
router.get('/hosReg',joinController.hosReg);
router.post('/createMed',joinController.createMed);
router.post('/createAmb',joinController.createAmb);
router.post('/createHos',joinController.createHos);


module.exports = router;