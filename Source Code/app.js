

const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const { render } = require("ejs");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.post("/", function (req, res) {
    let ptr=req.body.cityName;
    
})

// weather.fetchWeather("London");

app.get("/", function (req, res) {
    res.render("markup");
})
app.listen(3000, function () {
    console.log("Server started on port 3000");
})