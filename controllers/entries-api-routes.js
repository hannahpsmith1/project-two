// this file creates a router than handles the api routes for entries data

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// add an entry
router.post("/api/users/:user_id/entries", (req, res) => {
  res.send("API route for adding an entry belonging to user id " + req.params.user_id);
});

// update an entry
router.put("/api/users/:user_id/entries/:entry_id", (req, res) => {
  res.send("API route for updating entry with id " + req.params.entry_id + " belonging to user id " + req.params.user_id);
});

// delete an entry
router.delete("/api/users/:user_id/entries/:entry_id", (req, res) => {
  res.send("API route for deleting entry with id " + req.params.entry_id + " belonging to user id " + req.params.user_id);
});

// export router
module.exports = router;