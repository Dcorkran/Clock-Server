const SERVER_URL = 'http://localhost:8080';
var express = require('express');
var router = express.Router();
var rp = require('request-promise');

function getUserByEmail(email){
  var options = {
      uri: `${SERVER_URL}/user?email=${email}`,
      json: true // Automatically parses the JSON string in the response
    };
  return rp(options)
      .then(function (data) {
        console.log(data[0]);
        // res.json(data);
        return data[0];
      })
      .catch(function (err) {
        console.log(err);
        // res.json(err);
        return err
          // API call failed...
      });
};

function updateAlarmByUser(userID,alarm){
  var options = {
      method: 'PUT',
      uri: `${SERVER_URL}/clock`,
      json: true, // Automatically parses the JSON string in the response
      body: {
        id: userID,
        alarm
    },
    };
  return rp(options)
      .then(function (data) {
        console.log(data);
        // res.json(data);
        return data;
      })
      .catch(function (err) {
        console.log(err);
        // res.json(err);
        return err
          // API call failed...
      });
};

function getAlarmByUser(userID){
  var options = {
      method: 'GET',
      uri: `${SERVER_URL}/clock?id=${userID}`,
      json: true // Automatically parses the JSON string in the response
    };
  return rp(options)
      .then(function (data) {
        console.log(data[0]);
        // res.json(data);
        return data[0];
      })
      .catch(function (err) {
        console.log(err);
        // res.json(err);
        return err
          // API call failed...
      });
}

module.exports.getUserByEmail = getUserByEmail;
module.exports.updateAlarmByUser = updateAlarmByUser;
module.exports.getAlarmByUser = getAlarmByUser;
