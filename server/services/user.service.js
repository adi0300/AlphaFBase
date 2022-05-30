const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../models/user.model.js');

module.exports = {
register,
login,
getByID
};

async function register(user){
    if( await User.findOne({username: user.username})) {
        throw 'Username' + user.username + 'already exists';
    }

    const newUser = new User(user);
    await newUser.save();
}

async function login({username, password}) {
    const user = await User.findOne({username});
    if(user && password == user.password){
        const jwtoken = jwt.sign({sub: user.id}, config.secret, {expiresIn: '10d'});
        return{
            jwtoken
        };
    }
}

async function getByID(id) {
    return await User.findById(id);
}