const express = require('express');
const superAdminUserController = require('../controllers/superAdminUser_controller');
const updateTeamController = require('./../controllers/updateTeam_controller');
const passport = require('passport');
const router = express.Router();

// Store Request
router.post('/approveStore/:id',passport.checkAuthentication,updateTeamController.approveStore);
router.post('/cancelStore/:id',passport.checkAuthentication,updateTeamController.cancelStore);

// Hospiatl Request
router.post('/approveHospital/:id',passport.checkAuthentication,updateTeamController.approveHospital);
router.post('/cancelHospital/:id',passport.checkAuthentication,updateTeamController.cancelHospital);

// Ambulance Request
router.post('/approveAmbulance/:id',passport.checkAuthentication,updateTeamController.approveAmbulance);
router.post('/cancelAmbulance/:id',passport.checkAuthentication,updateTeamController.cancelAmbulance);

module.exports = router;