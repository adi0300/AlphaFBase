const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://User:parolauser@clusteralpha.p4a6i.mongodb.net/alphafbaseapp?retryWrites=true&w=majority"
)
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));

app.listen(3001, ()=>{
    console.log("First run of the server");
})
