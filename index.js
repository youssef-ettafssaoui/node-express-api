const config = require("./config");

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the World of Containers on Azure Cloud !</h1>");
});

app.get("/youssef", (req, res) => {
  res.send("Hello Youssef, How are you doing Today !");
});

app.listen(config.PORT, () => {
  console.log("Application started successfully on Port: " + config.PORT);
});
