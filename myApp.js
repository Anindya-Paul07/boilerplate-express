require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip} `);
        next();
});

console.log("Hello Express")


app.get("/", function(req, res, next)  {
        res.sendFile( __dirname + "/views/index.html")
        console.log('Time:', Date.now())
});

app.get("/json", (req, res ) => {
   
if (process.env.MESSAGE_STYLE === "uppercase") {

    response = "Hello json".toUpperCase();
    } else {
    response = "Hello json";
    }
    res.json({message: response})
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
},
 (req, res) => {
    res.json({time: req.time})
 }
);

app.get("/:word/echo", (req,res) => {
    const { word } = req.params
    res.json({echo: word})
});



app.get("/name", (req, res) => {
    firstname = req.query.first;
    lastname  = req.query.last;
    res.json({
        name: `${firstname} ${lastname}`,
    });
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
    
app.post("/name", (req, res) => {
    
    firstname = req.body.first;
    lastname = req.body.last;
    res.json({
        name: `${firstname} ${lastname}`
    });
});


        



























app.use("/public", express.static(__dirname + "/public"))
        console.log("Static file Configured")


 module.exports = app;
