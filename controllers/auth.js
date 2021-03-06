
const User = require('../models/user');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    (username, password, callback) => {
        User.findOne({
            username: username
        }, (err, user) => {
            if (err) {
                return callback(err);
            }

            if (!user) {
                return callback(null, false);
            }

            user.verifyPassword(password, (err, isMatch) => {
                if (err) {
                    return callback(err);
                }

                if (!isMatch) {
                    return callback(null, false);
                }

                return callback(null, user);
            });
        });
    }
));

exports.isAuthenticated = passport.authenticate('basic', {
    session: false
});