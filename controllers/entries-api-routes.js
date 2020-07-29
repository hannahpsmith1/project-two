// this file creates a router than handles the api routes for entries data

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// add an entry
router.post("/api/entries", (req, res) => {
  res.send("API route for adding an entry");
});

// update an entry
router.put("/api/entries/:entry_id", (req, res) => {
  res.send("API route for updating entry with id " + req.params.entry_id);
});

// delete an entry
router.delete("/api/entries/:entry_id", (req, res) => {
  res.send("API route for deleting entry with id " + req.params.entry_id);
});

// export router
module.exports = router;