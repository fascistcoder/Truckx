const mongoose = require("mongoose");
const alarmMessageSchema = new mongoose.Schema({
    imei:{
        type: Number,
        required:true,
    },

    alarmType:
    {
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
    fileList:{
        type: Array,
    }
});

const AlarmMessage = mongoose.model("AlarmMessage", alarmMessageSchema);
module.exports = AlarmMessage;