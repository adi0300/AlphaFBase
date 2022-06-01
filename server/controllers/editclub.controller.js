const express = require('express');
const router = express.Router();
const clubService = require('../services/club.service');

router.post('/editclubdetails', editclubController);

module.exports = router;

function editclubController(req,res,next){
    console.log("Trying to edit club details");

    clubService.editClub(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}