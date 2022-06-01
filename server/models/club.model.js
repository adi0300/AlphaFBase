const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    year: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    manager: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("clubs", clubSchema);