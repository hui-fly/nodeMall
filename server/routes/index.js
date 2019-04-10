var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {     
  res.render('index', { title: 'Express' });//路由,加载view下的index,因为在app.js中app.set('views',path.join(__dirname,'views'))
});

module.exports = router;
