// this file creates a router than handles the api routes for entries data

// import dependencies
const express = require("express");

// import sequelize models
const db = require("../models");

// create router
const router = express.Router();

// add an entry
router.post("/journal/:hikeTitle/:hikeID", (req, res) => {
  // API call to get trail data for the specific trail
  // Save that trail data to hikes table\
  // working on getting findor Create working
  // db.hikes.findOrCreate({
  //   id:req.params.hikeID,
  //   hikeName:req.params.hikeTitle,

  // })
  // Save the entry to the entry table
  console.log(req.body);
  db.entry.create({
    title: req.body.title,
    hikeID: req.params.hikeID,
    userID: req.user.id,
    description: req.body.description,
    dateHiked: req.body.dateHiked
  })
  .then(() => {
    res.status(200).redirect("/entries");
  })
  .catch(err => {
    console.log(err)
    res.status(500).end();
  });
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