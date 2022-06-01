const express = require('express');
const router = express.Router();
const clubService = require('../services/club.service');

router.get('/getclubdetails', getclubController);

module.exports = router;

function getclubController(req,res,next){
    console.log("Trying to get a club's details");

    clubService.getClub()
    .then( (club) => {
        if(club){
            res.json(club);
            console.log("Sent club details successfully");
        }else{
            res.status(400).json({message: "Can't get club details"});
            console.log("Can't send club details successfully");
        }
    }).catch(err => next(err));
}


