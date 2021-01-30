import express from "express";
import fs, { readFileSync } from "fs";
const app = express();
const meals = JSON.parse(readFileSync("./data/meals.json"));
const reviews = JSON.parse(readFileSync("./data/reviews.json"));
const reservations = JSON.parse(readFileSync("./data/reservations.json"));

app.get("/", (req, res) => res.send("Can't find that one"));

///=== Respond with the json for all the meals For each meal,
//=== if there are reviews matching it's meal ID

app.get("/meals", (req, res, next) => {
  meals.forEach(meal => {
    meal.reviews = [];
    for (let review of reviews) {
      if (meal.id === review.mealId) {
        meal.reviews.push(review);
      }
    }
  });
  res.json(meals);
  next();
});

//==== Respond with the json for all the meals (including it's reviews) that are cheap ====

app.get("/cheap-meals", (req, res, next) => {
  res.send(meals.filter(meal => meal.price <= 64));
  next();
});

//=== Respond with the json for all the meals (including it's reviews) that can fit lots of people

app.get("/large-meals", (req, res, next) => {
  res.send(meals.filter(meal => meal.maxNumberOfGuests >= 9));
  next();
});

//==== Respond with the json for all reservations ====

app.get("/reservations", (req, res, next) => {
  res.send(reservations);
  next();
});

//==== Respond with the json for a random reservation ====

app.get("/reservation", (req, res, next) => {
  res.send(reservations[Math.floor(Math.random() * reservations.length)]);
  next();
});

app.listen(8080, () => console.log("Magic happens on port " + 8080));
