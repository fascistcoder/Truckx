const utils = require("./Util/constants")
const AlarmMessage = require("./Models/alarmMessage")
const LocationMessage = require("./Models/locationMessage");
const Video = require("./Models/video");
const User = require("./Models/user");

const jwt = require("jsonwebtoken");
const RANDOM_LOGIN = Passage.RANDOM_LOGIN;

const checkLogin = function(req, res){
    const imei = Number(req.body.imei);
    const token = jwt.sign({imei: imei},
                            RANDOM_LOGIN,
                            {expiresIn: '6h'}
                          );
    User.findOne({imei: imei}).
        then(user=>{
            user.secret = token;
            console.log("user is:",user);
            user.save()
            .then( ()=> {
                console.log("random data updated")
                res.status(200).send({token: token, imei: imei});
            })
            .catch(() => {
                console.log("random not updated yet");
                res.status(400).send(err)
            });
    }).catch(err => {
        console.log(`Unable to find the user for given imei: ${imei}`);
        res.status(400).send(err)
    });
}
const postAlarm =  function(req, res){
    /*
        alarmType, alarmTime, latitude, longitude, fileList
    */
    // fetch user imei from the session
    const imei = Number(req.params.imei);
    
    const alarmMessage = new AlarmMessage({ imei: imei,
                                            alarmType: req.body.alarmType,
                                            alarmTime: req.body.alarmTime,
                                            latitude: req.body.latitude,
                                            longitude:req.body.longitude,
                                            fileList: req.body.fileList
                                        });
    alarmMessage.save()
        .then(result =>{
            console.log("Alarm message stored!!");
            res.status(201).send(`Result \n\n ${result}`);
        }).catch(err =>{
            console.log("error in pushing alarm message\n");
            console.log(err);
            resu.status(400).send("Error!!!")
        });
}

const postLocation = function(req, res){
    const imei = Number(req.params.imei);
    const locationMessage = new LocationMessage({ imei: imei,
                                            locationTime: req.body.locationTime,
                                            latitude: req.body.latitude,
                                            longitude: req.body.longitude,
                                        });
    locationMessage.save()
        .then(result =>{
            console.log("Location message stored!!");
            res.status(201).send(`Result \n\n ${result}`);
        }).catch(err =>{
            console.log("error in pushing location message\n");
            console.log(err);
            res.status(400).send("Error!!!")
        });
}

const postVideos = function(req, res){
    const imei = Number(req.body.imei);
    const video = new Video({   
                                imei: imei,
                                filename:req.body.filename,
                                data: req.body.data,
                            });
    video.save()
        .then(result =>{
            console.log("Video message stored!!");
            res.status(201).send(`Result \n\n ${result}`);
        }).catch(err =>{
            console.log("error in pushing video message\n");
            console.log(err);
            res.status(400).send("Error!!!")
        });
}

const receiveCommandResponse = function(req, res){
    // need to update this to store the command response and response time
    console.log(req.params.imei)
    console.log(req.body);
    res.send("Response received!");
}

exports.checkLogin = checkLogin;
exports.postAlarm = postAlarm;
exports.postLocation = postLocation;
exports.postVideos = postVideos;
exports.receiveCommandResponse = receiveCommandResponse;
