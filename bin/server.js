const express = require('express')
const fs = require('fs')
const path = require('path')
const evs = require('express-video-stream') // Express Video Stream

var app = express();

evs.setConfig(JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json')))); //Load config from file
//evs.addVideo("test3", "E:\\LesPleiades\\Blois16-10-2022\\20221016_180019.mp4")    //Add video to config

app.use(evs.middleware) //Use streaming middleware

app.get('/', (req, res) => {
    var page = fs.readFileSync(path.join(__dirname, '../public/index.html')) // Load html into buffer
    res.send(page + ' ');
})

app.listen(8080, () => {
    console.log("Test is up and running on localhost:8080")
})