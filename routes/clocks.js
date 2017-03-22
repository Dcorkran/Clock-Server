var express = require('express');
var router = express.Router();
var db = require('../api/db');

router.put('/', function(req, res, next) {
  db.updateAlarmByUser(req.body.id,req.body.alarm)
    .then((response)=>{
      res.json(response);
    })
});

router.get('/', function(req, res, next) {
  db.getAlarmByUser(req.body.id)
    .then((response)=>{
      res.json(response);
    })
});


module.exports = router;
