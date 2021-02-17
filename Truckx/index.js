/* packages which I used mongodb, maongoose, express, bodyParser, url, jsonwebtoken*/

const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dashcamPassage = require("./Passage/dashcamPassage");
const uiPassage = require("./Passage/uiPassage");
const errorController = require("./Controllers/errorController");
const uri = "mongodb"

app.use(bodyParser.json());
app.use("/dashcam", dashcamPassage);
app.use("/ui", uiPassage);
app.use(errorController.get404);

mongoose
    .connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(result => {
        console.log("Database connected in a while");
        app.listen(port, () => console.log(`ideal case listening on port ${port}!`));
    })

    .catch(err => {
        console.log(err);
        console.log("Connection disconnected!");
    });

