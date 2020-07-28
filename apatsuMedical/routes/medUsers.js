const express = require('express');
const medUserController = require('../controllers/medUser_controller');
const passport = require('passport');
const router = express.Router();

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/login'}
) ,medUserController.createSession);

// Destroy Session
router.get('/sign-out',medUserController.destroySession);

// Open Shop Page
router.get('/shop',passport.checkAuthentication,medUserController.shop);

// Confirmed Order Page
router.get('/confirmed',passport.checkAuthentication,medUserController.confirmed)

// Dispatched Order Page
router.get('/dispatched',passport.checkAuthentication,medUserController.dispatched)

// delivered Orders Page
router.get('/delivered',passport.checkAuthentication,medUserController.delivered)

// Open the Particular Page
router.get('/order/:id',passport.checkAuthentication,medUserController.order)

// Accept Order
router.post('/accept/:id',passport.checkAuthentication,medUserController.accept)

// Dispatch  the Order
router.post('/dispatch/:id',passport.checkAuthentication,medUserController.dispatch)

module.exports = router;