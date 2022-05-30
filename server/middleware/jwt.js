const { expressjwt: jwt} = require('express-jwt');
const config = require('../config.json');
const userService = require('../services/user.service');

module.exports = jwtauth;

function jwtauth(){
    const secret = config.secret;
  
    return jwt({ secret, algorithms: ["HS256"], revokeToken }).unless({
        path: [
            '/register'
        ]
    });
}



async function revokeToken(req, payload, done) {
    const user = await userService.getByID(payload.sub);

    if(!user){
        return done(null, true);
    }

    done();
};