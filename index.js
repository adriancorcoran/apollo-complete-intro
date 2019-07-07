// required to access variables in the .env file
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
//  The querystring module provides utilities for parsing and formatting URL query strings - usage: https://nodejs.org/api/querystring.html
// const querystring = require("querystring");
// wraps requests in an easy to use promise - usage: https://www.npmjs.com/package/request-promise
// const request = require("request-promise");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/env", (req, res) => {
  const myKey = process.env.MY_KEY;
  res.send(`This is my key: ${myKey}`);
  // res.json(process.env);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000 http://localhost:3000!");
});
