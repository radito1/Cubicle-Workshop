const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try{
            const payload = await jwt.verify(token, SECRET);

            req.user = payload;
            res.locals.user = payload;
            res.locals.isAuthenticated = true;

            next();
        } catch(err) {
            res.clearCookie('auth');

            res.redirect('/user/login');
        }
    } else {
        next();
    }
};