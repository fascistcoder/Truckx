const mongoose = require("mongoose");
const locationMessageSchema = new mongoose.Schema({
    imei:{
        type: Number,
        required: true,
    },
    locationTime:{
        type: Date,
        required: true,
    },
    latitude:{
        type: Number,
        required: true,
    },
    longitude:{
        type: Number,
        required: true,

    },
});

const LocationMessage = mongoose.model("LocationMessage", locationMessageSchema);
module.exports = LocationMessage;