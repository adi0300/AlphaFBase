const Player = require('../models/player.model.js');

module.exports = {
    addPlayer
};

async function addPlayer(player){
    if( await Player.findOne({name: player.name})) {
        throw 'Player' + player.name + 'already exists';
    }

    const newPlayer = new Player(player);
    await newPlayer.save();
}

