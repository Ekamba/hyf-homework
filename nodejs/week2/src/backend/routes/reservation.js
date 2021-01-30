const express = require("express");
const fs = require("fs");
const router = express.Router();

const reservations = JSON.parse(
  fs.readFileSync(__dirname + "/../data/reservations.json", "utf-8")
);
console.log(reservations);

//==== Respond with the json for all reservations

router.get("/", (req, res) => {
  res.json(reservations);
});

// ==== Respond with the json for the reservation with the corresponding id

router.use("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const IdCor = parseInt(id);
  const reservationId = reservations.filter(
    reservation => reservation.id === IdCor
  );
  if (reservationId != id) {
    matchReservationId = "provid match id";
  } else if (reservationId == id) {
    matchReservationId = "reservationId match";
  }
  res.send(reservationId);
});

module.exports = router;
