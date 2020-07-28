// this file creates a router than handles the html routes

// import dependencies
const express = require("express");

// create router
const router = express.Router();

// view home page
router.get("/", (req, res) => {
  res.send("Home page");
});

// view page for adding a user
router.get("/users/login", (req, res) => {
  res.send("Page for logging in an existing user");
});

// view page for adding a user
router.get("/users/new", (req, res) => {
  res.send("Page for adding a new user");
});

// view trails search results
router.get("/trails", (req, res) => {
  res.send("Trails search results");
});

// view details about a specific trail
router.get("/trails/:trail_id", (req, res) => {
  res.send("Trail details for id " + req.params.trail_id);
});

// view a user's favorite trails
router.get("/users/:user_id/favorites", (req, res) => {
  res.send("Favorited trails for user id " + req.params.user_id);
});

// view a user's entries
router.get("/users/:user_id/entries", (req, res) => {
  res.send("All entries for user id " + req.params.user_id);
});

// view page for adding an entry
router.get("/users/:user_id/entries/new", (req, res) => {
  res.send("Page for adding a new entry belonging to user id " + req.params.user_id);
});

// view a specific entry
router.get("/users/:user_id/entries/:entry_id", (req, res) => {
  res.send("Details for entry id " + req.params.entry_id + " belonging to user id " + req.params.user_id);
});

// view page for editing an entry
router.get("/users/:user_id/entries/:entry_id/edit", (req, res) => {
  res.send("Page for editing entry id " + req.params.entry_id + " belonging to user id " + req.params.user_id);
});

// redirect to home page if not found

router.get("*", (req, res) => {
  res.redirect("/");
});

// export router
module.exports = router;