const express = require("express");
const fs = require("fs");
const router = express.Router();

const reviews = JSON.parse(
  fs.readFileSync(__dirname + "/../data/reviews.json", "utf-8")
);
console.log(reviews);
// Respond with the json for all reviews

router.get("/", (req, res) => {
  res.json(reviews);
});

// Respond with the json for the review with the corresponding id

router.use("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const IdCor = parseInt(id);
  const reviewId = reviews.filter(review => review.id === IdCor);
  if (reviewId != id) {
    matchReviewId = "provid match id";
  } else if (reviewId == id) {
    matchReviewId = "reviewId match";
  }
  res.send(reviewId);
});

module.exports = router;
