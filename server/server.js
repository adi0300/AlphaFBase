const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//middleware not required quite yet

const registerRoute = require('./controllers/register.controller');
const loginRoute = require('./controllers/login.controller');
const logoutRoute = require('./controllers/logout.controller');
const addPlayerRoute = require('./controllers/addplayer.controller');
const getClubListRoute = require('./controllers/getclublist.controller');
const getPlayersListRoute = require('./controllers/getplayers.controller');
const getClubDetailsRoute = require('./controllers/getclub.controller');
const editClubDetailsRoute = require('./controllers/editclub.controller');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(
"mongodb+srv://User:parolauser@clusteralpha.p4a6i.mongodb.net/alphafbaseapp?retryWrites=true&w=majority"
)
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));


app.use('/api', registerRoute);
app.use('/api/verify', loginRoute);
app.use('/api/out', logoutRoute);
app.use('/api/players', addPlayerRoute);
app.use('/api/get', getClubListRoute);
app.use('/api/players', getPlayersListRoute);
app.use('/api/clubs', getClubDetailsRoute);
app.use('/api/club', editClubDetailsRoute);

app.listen(3001, ()=>{
    console.log("First run of the server");
})
