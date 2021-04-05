var express = require('express');
var app = express();
// Challenge #7 Implement a Root-Level Request Logger Middleware

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

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

/*
// Challenge #5
let message = {"message": "Hello json"};

app.get("/json", (req, res) => {res.json(message)});
*/

// Challenge #6
let message = {"message": "Hello json"};
app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase') {res.json({"message": "HELLO JSON"})}
  else {
  res.json(message)}});

// Challenge #8 Chain Middleware to Create a Time Server
/*
// Main Solution
app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => { res.json({time: req.time})
});
*/

// Alternative Solution
function getCurrentTimeString() {
  return new Date().toString();
}
app.get("/now", function(req, res, next) {
  req.time = getCurrentTimeString();
  next;
}, function(req, res) {
  res.json({time: req.time});
})


// Challenge #9 Get Route Parameter Input from the Client
/*
// Prototype code
app.get("/profile/:name", (req, res) => {
  let name =req.params.name;
  if (people[name]) {
    res.json(people[name])
  } else {
    res.json('Not Found')
  }
});
*/
app.get("/:word/echo", (req, res) => {
  console.log(req.params.word);
  res.json({echo: req.params.word})
  }
);


















 module.exports = app;
