const mongoose = require("mongoose");

const { hashPassword, comparePassword } = require('../utils/index');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Username email is required'],
        unique: true
    },
    address: {
        type: String,
        minlength: [10, 'Address too short expect a minimum of 10 characters']
    },
    password: {
        type: String,
        required: true,
        default: hashPassword('password')
    },
    contact_number: {
        type: String,
        required: [true, 'Contact phone number is required'],
        unique: true
    }
});

// Add hook to hash user password on save
UserSchema.pre('save', function (next) {
    if (this.password && this.isModified('password')) {
        this.password = hashPassword(this.password);
    }

    next();
});

// Add a schema level method to compare provided user password with store password
UserSchema.methods.comparePassword = async function (password) {
    return comparePassword(password, this.password)
};

const User = mongoose.model("User", UserSchema);

module.exports = User;