var moment = require('moment')

function formatDate(date){
  date += ' MST';
  console.log(date);

  var newDate = moment(date).format();
  newDate = newDate.substr(0,newDate.length - 4);
  newDate += '5';
  console.log(newDate,'date');
  return newDate
}

module.exports.formatDate = formatDate;
