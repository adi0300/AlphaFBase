const Club = require('../models/club.model.js');

module.exports = {
    editClub,
    getClub
};

async function editClub(club){
    const existing = await Club.findOne({username: club.username});

    if(existing){
        Object.assign(existing, club);
        await existing.save();
    }else{
        const newClub = new Club(club);
        await newClub.save();
    }
}

async function getClub(){
    return await Club.find({});
}
