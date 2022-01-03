var express = require('express');
var router = express.Router();

/* GET panel page. */
router.get('/', function(req, res, next) {
  res.render('panel', { title:'Panel',
                        panelTitle: 'Welcome to panel',
                        text1: 'text1',
                        text2: 'text2222' });
});

module.exports = router;
