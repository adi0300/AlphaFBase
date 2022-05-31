const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.get('/clublisthome', getclublistController);

module.exports = router;

function getclublistController(req,res,next) {
    console.log("Trying to get a list of clubs");

    userService.getClubList()
    .then( (club) => {
        if(club){
            res.json(club);
            console.log("Sent clubs succesfully");
        }
        else{
            res.status(400).json({message: "Can't get clubs"});
            console.log("Can't send clubs successfully");
        }
    }).catch(err => next(err));
}