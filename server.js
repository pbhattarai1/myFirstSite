/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: ______Pushparaj Bhattarai________________ Student ID: _______15628210_______ Date: ____2023/01/20____________
 *
 *  Online (Cyclic) URL:
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(HTTP_PORT);
