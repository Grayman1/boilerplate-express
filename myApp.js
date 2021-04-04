var express = require('express');
var app = express();
console.log("Hello World");
console.log(process.env.MESSAGE_STYLE)
// Challenge #2
/*app.get("/", (req, res) => {
  res.send('Hello Express');
});
*/
// Challenge #3
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html' );
});

// Challenge #4
/* app.use(express.static(__dirname + '/public'));
*/
app.use("/public",express.static(__dirname + '/public'));

// Challenge #5
let message = {"message": "Hello json"};
app.get("/json", (req, res) => {res.json(message)});




























 module.exports = app;
