const express = require('express');
const router = express.Router();
const playerService = require('../services/player.service');

router.get('/getplayers', getPlayerController);

module.exports = router;

function getPlayerController(req,res,next){
    console.log("Trying to get list of players");

    playerService.getPlayers()
    .then((players) => {
        if(players){
            res.json(players);
            console.log("Sent players succesfully");
        }
        else{
            res.status(400).json({message: "Can't get players"});
            console.log("Can't send players successfully");
        }
    }).catch(err => next(err));
}