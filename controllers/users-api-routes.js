// this file creates a router than handles the api routes for trail data

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// add a user
router.post("/api/users", (req, res) => {
  res.send("API route for adding a user");
});

// export router
module.exports = router;