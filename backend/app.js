const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoute = require('./routes/posts');

const app = express();

mongoose
  .connect(
    "mongodb+srv://pheakdey:nlmgnpwKqQDCZ1So@cluster0-aoa33.mongodb.net/node-angular?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoute);



module.exports = app;

/* password : nlmgnpwKqQDCZ1So */
