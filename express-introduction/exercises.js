const express = require("express");
const app = express();
const port = require("./constantes.js");

// Ex. 6
app.use("/statics", (req, res) => {
  res.sendFile(__dirname + "/statics/burro.jpg");
});

// Ex. 7
app.use((req, res, next) => {
  console.log("client received");
  next();
});

// Ex. 9

let tossCounter = 0;

app.use((req, res, next) => {
  let cointoss = Math.floor(Math.random() * 2) === 1 ? "cara" : "cruz";
  tossCounter++;
  res.locals = {
    coin: cointoss,
    toss: tossCounter,
  };

  next();
});

// Ex. 10

app.use((req, res, next) => {
  res.locals = {
    mensaje: `La moneda número ${res.locals.toss} ha salido ${res.locals.coin}`,
  };
  console.log(res.locals);
  next();
});

// EX. 11

// Ex. 8

app.use((req, res, next) => {
  console.log("My first application middleware!");
  res.send("My first application middleware!");
  next();
});

// Ex. 5

app.listen(port, () => {
  console.log("Listening at http:localhost:3000");
});
