const bcrypt = require('bcrypt');

// Function to hash user password
exports.hashPassword = (password) => bcrypt.hashSync(password, 10);

// Function to check user password
exports.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};