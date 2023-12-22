const express = require('express');
const router = express.Router();


const {displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed} = require('../controler/Qcms');




router.get('/', displayQcms);


router.get('/:qcmid', displayQcmDetailed)

router.get('/json', displayQcmJson);

router.get('/new', displayFormQcm);

router.post('/new', createNewForm);




module.exports = router;