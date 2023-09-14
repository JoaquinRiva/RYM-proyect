const express = require("express");
const mainRouter = require("./routes/mainRouter");
const app = express();
const morgan = require("morgan");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(morgan("dev"));

//http://localhost:3001/rickandmorty
app.use("/rickandmorty", mainRouter);

module.exports = app;
