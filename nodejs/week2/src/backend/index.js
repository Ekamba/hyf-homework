const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

// ==== Routes =====//
const meals = require("./routes/meals");
const reservations = require("./routes/reservations");
const reviews = require("./routes/reviews");
app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);

//==== Middleware ====//

app.use((req, res) => {
  let d = new Date();
  const time = `${d.getFullYear()}-${d.getMonth() +
    1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()} request received for path: ${
    req.url
  }`;
  console.log(time);
});

app.listen(port, () => console.log(`Magic happens on port ${port}!`));
