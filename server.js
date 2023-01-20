/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: ______Pushparaj Bhattarai________________ Student ID: _______15628210_______ Date: ____2023/01/20____________
 *
 *  Online (Cyclic) URL: https://defiant-uniform-deer.cyclic.app
 *
 ********************************************************************************/

var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.send(
    "Pushparaj Bhattarai <br /> Student ID : 159658210 <br /> <a href='/about'>Go to the about page</a>"
  );
});

// setup another route to listen on /about
app.get("/about", function (req, res) {
  res.send("<h3>About Pushparaj <br></h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
