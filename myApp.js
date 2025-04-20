let express = require('express');
let app = express();


console.log("Hello World")



app.get("/", function(req, res) {
        res.sendFile( __dirname + "/views/index.html")
        console.log("Path not found")
    
app.use("/public", express.static(__dirname + "/public"))
        console.log("Static file didn't defined")    
    })


    
































 module.exports = app;
