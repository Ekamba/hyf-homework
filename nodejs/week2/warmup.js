const express = require("express");
const app = express();

app.get("/numbers/add/:first/:second", (req, res) => {
  const first = parseInt(req.params.first);
  const second = parseInt(req.params.second);
  const sum = (first + second).toString();
  res.send(sum);
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
  const first = parseInt(req.params.first);
  const second = parseInt(req.params.second);
  const product = (first * second).toString();
  res.send(product);
});

//listener
app.listen(3000, () =>
  console.log("Successfully started express application!")
);
