// this file creates a router than handles the api routes for trail data

// import dependencies
const express = require("express");

const db = require("../models");
const passport = require("../config/passport");

// create router
const router = express.Router();

// add a usr
router.post("/signUp", function(req, res) {
  console.log(req.body);
  db.user.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/signIn");
    })
    .catch(function(err) {
      console.log(err);
      res.status(401).end();
    });
});

// log in a user
router.post("/signIn", passport.authenticate("local"), (req, res) => {
  if (req.user) {
    res.status(200).end();
  } else {
    res.status(401).end();
  }
});

// log out a user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// export router
module.exports = router;