const express = require('express');
const router = express.Router();

const {welcomeMessage, welcomeMessageFunction, testEjsView} = require('../controler/welcome');


router.get('/', welcomeMessage);

router.get('/welcome2', welcomeMessageFunction);

router.get('/testejs', testEjsView);



module.exports = router; 