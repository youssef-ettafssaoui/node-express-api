const config = require("./config");

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the World of Containers !");
});

app.listen(config.PORT, () => {
  console.log("Application started successfully on Port: " + config.PORT);
});
