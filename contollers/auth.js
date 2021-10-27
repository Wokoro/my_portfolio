const userModel = require('../models/user');

exports.login = async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });

        if (!user) {
            res.locals.error = 'Username or password incorrect';
            return res.render('login', { title: 'Portfolio | login', active: 'login' });
        }

        res.cookie('username', user.username);

        res.send('Login successful');

    } catch (err) {
        next(err)
    }
}

exports.logout = async function logout(req, res, next) {
    res.clearCookie('username');

    res.redirect('login')
}