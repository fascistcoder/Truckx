const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    imei:{
        type: Number,
        required: true,
    },
    filename:{
        type: String, 
        required: true,
    },
    data:{
        type: String,
        required: true,
    }
})

const Videos = mongoose.model("Videos", videoSchema);
module.exports = Videos;