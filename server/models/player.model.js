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
        unique: true,
        required: true,
    },
    position: {
        type: String,
        unique: true,
        required:true,
    },
    goals: {
        type: Number,
        unique: true,
        required:true,
    },
    assists: {
        type: Number,
        unique: true,
        required:true,
    },
    contractlength: {
        type: String,
        unique: true,
        required: true,
    },
    wage: {
        type: String,
        unique: true,
        required:true,
    },
    username: {
        type: String,
        unque: true,
        required:true,
    }
});

module.exports = mongoose.model("players", playerSchema);