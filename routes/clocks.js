var express = require('express');
var router = express.Router();
var db = require('../api/db');
var format = require('../api/format')

router.put('/', function(req, res, next) {
  console.log(req.body,'yo');
  date = format.formatDate(req.body.alarm);
  db.updateAlarmByUser(req.body.id,date)
    .then((response)=>{
      res.json(response);
    })
});

router.get('/', function(req, res, next) {
  console.log(req.body);
  db.getAlarmByUser(req.body.id)
    .then((response)=>{
      res.json(response);
    })
});


module.exports = router;
