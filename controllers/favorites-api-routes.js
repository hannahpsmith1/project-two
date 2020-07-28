// this file creates a router than handles the api routes for favorites data

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// add a favorite
router.post("/api/users/:user_id/favorites", (req, res) => {
  res.send("API route for adding a favorite belonging to user id " + req.params.user_id);
});

// remove a favorite
router.delete("/api/users/:user_id/favorites/:favorite_id", (req, res) => {
  res.send("API route for removing favorite with id " + req.params.favorite_id + " belonging to user id " + req.params.user_id);
});

// export router
module.exports = router;