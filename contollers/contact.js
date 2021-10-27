const UserModel = require('../models/user');

exports.list = async function (req, res, next) {
    const users = await UserModel.find().sort({ "username": 1 });

    const username = req.cookies.username;
    res.render('contact_list', { title: 'Portfolio | Contacts', active: 'contact-list', username, users });
}

exports.delete = async function (req, res, next) {
    const { account_id } = req.body;

    await UserModel.deleteOne({ _id: account_id });
    res.locals.message = 'Account deleted successfully';

    res.redirect('/contact-list');
}