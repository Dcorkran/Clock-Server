var express = require('express');
var router = express.Router();
var db = require('../api/db');
var bcryptFunctions = require('../auth/bcryptFunctions');

/* GET users listing. */
router.post('/', function(req, res, next) {
  let user;
  db.getUserByEmail(req.body.email)
    .then((data)=>{
      user = data;
      console.log(user);
      if (user) {
        return bcryptFunctions.checkPassword(req.body.password,user.password)
      } else {
        return false;
      }
    })
    .then((passwordValidated)=>{
      if (passwordValidated) {
        res.json({user,validated:true});
      } else {
        res.json({validated:false});
      }
    })
});

module.exports = router;
