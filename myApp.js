var express = require('express');
var app = express();
console.log("Hello World");

// Challenge #2
/*app.get("/", (req, res) => {
  res.send('Hello Express');
});
*/
// Challenge #3
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html' );
});

































 module.exports = app;
