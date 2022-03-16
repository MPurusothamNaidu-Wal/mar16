const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.get('/', function (req, res) {
  let fullPath = path.join(__dirname, '/homepage.html');
  res.sendFile(fullPath);
});
app.get('/show', function (req, res) {
  let fullPath = path.join(__dirname, '/Show.html');
  res.sendFile(fullPath);
});
app.get('/add', function (req, res) {
  let fullPath = path.join(__dirname, '/AddCar.html');
  res.sendFile(fullPath);
});
app.get('/login', function (req, res) {
  let fullPath = path.join(__dirname, '/login.html');
  res.sendFile(fullPath);
});
app.post('/login', function (req, res) {
  console.log(req.body);
  if (req.body.username == 'nani' && req.body.password == 'abc') {
    res.send(
      `<style>body{background-color: aliceblue;}</style><h1>Logged In</h1>`
    );
  } else {
    res.send('Wrong Username and password');
  }
});
app.listen(3001);
console.log('Code running on port 3001');
