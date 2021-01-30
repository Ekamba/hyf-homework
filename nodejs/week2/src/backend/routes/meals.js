const express = require("express");
const router = express.Router();
const fs = require("fs");

const meals = JSON.parse(
  fs.readFileSync(__dirname + "/../data/meals.json", "utf-8")
);
console.log(meals);

// ====Respond with the json for all the meals ====//

router.get("/", (req, res) => {
  res.send(meals);
});

//==== Respond with the json for the meal with the corresponding id ====

router.use("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const IdCor = parseInt(id);
  const mealId = meals.filter(meal => meal.id === IdCor);
  if (mealId != id) {
    matchMealId = "provid match id";
  } else if (mealId == id) {
    matchMealId = "mealId match";
  }
  res.send(mealId);
});

router.get("/api/meals", (req, res) => {
  console.log(req.query);
  const { maxPrice } = req.query;
  const { title } = req.query;
  const { createdAfter } = req.query;
  const { limit } = req.query;

  //==== Get meals that has a price smaller than maxPrice ====//
  if (maxPrice) {
    const mealPrice = meals.filter(meal => meal.price < parseInt(maxPrice));
    res.send(mealPrice);
  }

  //==== Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde====//
  if (title) {
    const mealsTitle = meals.filter(meal =>
      meal.title.toLowerCase().includes(title.toLowerCase())
    );
    res.send(mealsTitle);
  }

  //==== Get meals that has been created after the date ====//
  if (createdAfter) {
    const { createdAfter } = req.query;
    console.log(req.query);
    const mealAfterDate = meals.filter(
      meal => new Date(meal.createdAt) > new Date(createdAfter)
    );
    res.send(mealAfterDate);
  }

  //==== Only specific number of meals ====//
  if (limit) {
    console.log(req.query);
    const mealsLimit = meals.slice(0, limit);
    res.send(mealsLimit);
  }
});

module.exports = router;
