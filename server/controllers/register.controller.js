const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');


router.post('/register', registerController);

module.exports = router;


function registerController(req,res,next){

console.log("Trying to register user");


    userService.register(req.body)
    .then( () => res.json({}))
    .catch(err => next(err));
}
