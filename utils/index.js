const bcrypt = require('bcrypt');

// Function to hash user password
exports.hashPassword = function (password) {
   return bcrypt.hashSync(password, 10);
}

// Function to check user password
exports.comparePassword = function (password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
};