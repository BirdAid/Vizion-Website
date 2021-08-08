const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/contactform.html");
});

app.post("/", function(req, res) {

    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var data = {
        
    }

});

app.listen(3000, function() {
    console.log("Server running on port whatever ")
});

// API key
//8cf20bfbf5861cd66d21c6bd51fc4b2b-us5
// listiD
// 7b9614c15f