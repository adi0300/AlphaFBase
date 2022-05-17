const User = require('../models/user.model.js');

module.exports = {
register
};

async function register(user){
    if( await User.findOne({username: user.username})) {
        throw 'Username' + user.username + 'already exists';
    }

    const newUser = new User(user);
    await newUser.save();
}