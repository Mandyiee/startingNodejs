const express = require('express')
const router = express.Router()

//index route
router.get('/', function(req,res) {
  res.render('index');
});

//exporting tge router
module.exports = router