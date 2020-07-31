// this file creates a router than handles the api routes for favorites data

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// add a favorite
router.post("/api/favorites", (req, res) => {
  res.send("API route for adding a favorite");
});

// remove a favorite
router.delete("/api/favorites/:favorite_id", (req, res) => {
  res.send("API route for removing favorite with id " + req.params.favorite_id);
});

// export router
module.exports = router;