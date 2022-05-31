const express = require('express');
const router = express.Router();
const playerService = require('../services/player.service');

router.post('/addplayer', addPlayerController);

module.exports = router;

function addPlayerController(req,res,next) {
    console.log("Trying to add a new player");

    playerService.addPlayer(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}