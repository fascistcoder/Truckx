const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    imei:{
        type: Number,
        required: true,
        unique: true,
    },
    login:{
        type: String,
        default: "login",
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;