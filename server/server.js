const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//middleware not required quite yet

const registerRoute = require('./controllers/register.controller');
const loginRoute = require('./controllers/login.controller');

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


app.listen(3001, ()=>{
    console.log("First run of the server");
})
