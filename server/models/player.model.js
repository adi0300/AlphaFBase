const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required:true,
    },
    goals: {
        type: Number,
        required:true,
    },
    assists: {
        type: Number,
        required:true,
    },
    contractlength: {
        type: String,
        required: true,
    },
    wage: {
        type: String,
        required:true,
    },
    username: {
        type: String,
        required:true,
    }
});

module.exports = mongoose.model("players", playerSchema);