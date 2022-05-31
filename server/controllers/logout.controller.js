const express = require('express');
const router = express.Router();

router.get('/logout', logoutController);

module.exports = router;

function logoutController(req,res,next) {
    console.log("Trying to logout user");

    res.clearCookie("token",{path: '/'});
    res.send("logout succesful");
}