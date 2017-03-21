var bcrypt = require('bcryptjs');
function generatePassword(password){
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
          console.log(hash,'hi');
      });
  });
}

function checkPassword(password, dbPassword){
  return bcrypt.compare(password, dbPassword);
}

module.exports.generatePassword = generatePassword;
module.exports.checkPassword = checkPassword;
