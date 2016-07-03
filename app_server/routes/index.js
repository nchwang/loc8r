var express = require('express');
var router = express.Router();

/* GET home page. */

var mainCtrl = require('../controllers/main');

router.get('/', mainCtrl.index);

module.exports = router;
