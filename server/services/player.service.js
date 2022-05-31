const Player = require('../models/player.model.js');

module.exports = {
    addPlayer,
    getPlayers
};

async function addPlayer(player){
    if( await Player.findOne({name: player.name})) {
        throw 'Player' + player.name + 'already exists';
    }

    const newPlayer = new Player(player);
    await newPlayer.save();
}

async function getPlayers(){
    return await Player.find({});
}

