const express = require('express');
const router = express.Router();


const   {displayquestion, displayFormquestion, createNewquestion, displayquestionJson, displayquestionDetailed} = require('../controler/questions');



router.get('/', displayquestion);

router.get('/:qcmid', displayquestionDetailed)

router.get('/json', displayquestionJson);

router.get('/new', displayFormquestion); 

router.post('/new', createNewquestion);





module.exports = router;