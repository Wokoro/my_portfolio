const UserModel = require('../models/user');

exports.list = async function (req, res, next) {
    const users = await UserModel.find().sort({ "username": 1 });

    const username = req.cookies.username;
    res.render('contact_list', { title: 'Portfolio | Contacts', active: 'login', username, users });
}