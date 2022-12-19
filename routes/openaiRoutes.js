const express = require('express');
const {generateImage} = require('../controllers/openaicontroller.js');
const router  = express.Router();

router.post('/generateimage', generateImage);


module.exports = router;