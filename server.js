const express = require("express");
const app = express();

const PORT = processs.env.PORT || 3000;

//Middleware
// app.use(express.static('WEBSITE'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/contactform.html')
})

app.listen(3000, function() {
    console.log('Server running on port ${PORT}')
})