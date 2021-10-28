const UserModel = require('../models/user');

// Function to handle displaying of contacts
exports.list = async function (req, res, next) {
    const users = await UserModel.find().sort({ "username": 1 });

    const username = req.cookies.username;
    res.render('contact_list', { title: 'Portfolio | Contacts', active: 'contact-list', username, users });
}

// Function to delete contacts
exports.delete = async function (req, res, next) {
    const { account_id } = req.query;

    await UserModel.deleteOne({ _id: account_id });
    res.locals.message = 'Account deleted successfully';

    res.redirect('/contact-list');
}

// Function to update a given contact
exports.update = async function (req, res, next) {
    const { account_id } = req.query;
    const username = req.cookies.username;

    const account = await UserModel.findOne({ _id: account_id });

    res.render('account_update', { title: 'Portfolio | Update ', active: 'contact-list', username, account });
}

// Function to handle updating of contacts
exports.processUpdate = async function (req, res, next) {
    const { username, email, address, contact_number, account_id } = req.body;

    const updatedUser = await UserModel.findOneAndUpdate({ _id: account_id }, {
        username, email, address, contact_number
    });

    res.redirect('/contact-list')
}