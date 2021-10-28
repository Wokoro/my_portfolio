// Middleware function to handler user authentication
exports.authenticator = async function (req, res, next) {
    if (!req.cookies.username) {
        res.locals.error = 'User must be logged in';
        res.redirect('login')
    };

    next();
}