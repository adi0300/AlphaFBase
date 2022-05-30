const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/login', loginController);

module.exports = router;

function loginController(req,res,next) {
    console.log("Trying to login user");

    userService.login(req.body)
    .then( (token) => {
       if(token){
           res.send(token);
           console.log("Successful login");
           console.log(token);
       }else{
           res.status(400).json({message: "Credentials incorrect"});
           console.log("Not successful login");
           console.log(token);
       }
     //res.send(token) 
   // : res.status(400).json({message: "Credentials incorrect"})
    }).catch(err => next(err));
}