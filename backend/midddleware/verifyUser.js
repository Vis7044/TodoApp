const jwt = require('jsonwebtoken')
const {errorHandler} = require('./error.js')

module.exports.verifyUser = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return next(err);
        req.user = user;
        next();
    });
}