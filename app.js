const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const ejs = require("ejs");
const request = require('request');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("home/index")
})

app.get("/testhome", (req, res) => {
    var category = 'education';
    request.get({
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: {
            'X-Api-Key': process.env.quote,
        },
    }, function (err, body) {
        if(!err){
            const apiRes = JSON.parse(body.body);
            const quote = apiRes[0].quote;
            res.render("tests/testhome",{body:quote})
        }
        else{
            console.log(err)
        }
    });
})

app.get("/testcases", function (req, res) {
    res.render("testcase")
})

app.listen("3002", function () {
    console.log("Server is up n running at 3002")
})