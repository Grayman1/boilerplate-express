var express = require('express');
var app = express();
let bodyParser = require('body-parser');
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


let people = {
  'alice': {name: 'Alice', age: 22},
  'bob': {name: 'Bob', age: 27},
  'charlie': {name: 'Charlie', age: 25}
}
// Challenge 10 Get Query Parameter Input from the Client
/*
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
API endpoint, mounted at GET /name.
structure { name: 'firstname lastname'}
first=firstname&last=lastname
you can use the method app.route(path).get(handler).post(handler)
*/
app.get('/name', (req, res) => {
  let string = req.query.first + " " + req.query.last
  res.json({name: string})
});

// Challenge #11 -- Use body-parser to Parse POST Requests
/*
- Install body-parser module in package.json
- Require body-parser
- Add middleware (bodyParser.urlencoded({extended: false}))
-  Pass to app.use()

*/
/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/profile', (req, res) => {
  let name = req.query.name
  if (people[name]) {
    res.json(people[name])
  }
})

app.post('/search', bodyParser.urlencoded({extended: false}), (req, res, next) => {
  console.log(req);
  next()
})
*/


app.use(bodyParser.urlencoded({extended: false})
  );









 module.exports = app;
