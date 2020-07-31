// this file creates a router than handles the html routes

// third party api keys (not connected to any paid accounts)
const MAPBOX_API_KEY = "pk.eyJ1IjoiaGFubmFocHNtaXRoMSIsImEiOiJja2Q5YWV2Z2cycnRkMzBxOXRvaTY5d3ZyIn0.AsJlZWY4QSF_sDuluyby_w";
const TRAILS_API_KEY = "200852069-3d419e2b51f92a7bd4335a8172e48379";

// import dependencies
const express = require("express");
const axios = require("axios");

// import sequelize models
const db = require("../models");

// create router
const router = express.Router();

// view home page
router.get("/", (req, res) => {
  res.render("home", {});
});

// view page for adding a user
router.get("/signUp", (req, res) => {
  res.send("signUp", {});
});

// view page for logging in
router.get("/signIn", (req,res) => {
  res.render("signIn", {});
});

// view trails search results
router.get("/trails", (req, res) => {
  // route: "/trails?q=LOCATION_SEARCH_TERM"

  // keep track of place name so we can verify that the correct location was found
  let placeName;

  // make API call to MapBox to get coordinates
  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.query.q}.json?access_token=${MAPBOX_API_KEY}`)
  .then(response => {
    const coords = response.data.features[0].center;
    placeName = response.data.features[0].place_name;
    console.log(`${placeName}: ${coords}`);
    // make API call to The Hiking Project to get trails near coordinates
    return axios.get(`https://www.hikingproject.com/data/get-trails?lon=${coords[0]}&lat=${coords[1]}&key=${TRAILS_API_KEY}`);
  })
  .then(response => {
    console.log(`${response.data.trails.length} trails found!`);
    // this will be changed to res.render()
    res.render("search", {placeName: placeName, trails: response.data.trails});
  })
  .catch(err => {
    console.log(err);
    res.send("An error occurred...")
  });
});

// // view details about a specific trail
// router.get("/trails/:trail_id", (req, res) => {
//   res.send("Trail details for id " + req.params.trail_id);
// });

// // view a user's favorite trails
// router.get("/favorites", (req, res) => {
//   res.send("Favorited trails current user");
// });

// view a user's entries
router.get("/entries", (req, res) => {
  db.entry.findAll({}).then(data => {
    console.log(data);
    res.render("entries", {entries: data});
  });
});

// view page for adding an entry
router.get("/entries/new", (req, res) => {
  res.render("addEntry", {});
});

// // view a specific entry
// router.get("/entries/:entry_id", (req, res) => {
//   res.send("Details for entry id " + req.params.entry_id);
// });

// // view page for editing an entry
// router.get("/entries/:entry_id/edit", (req, res) => {
//   res.send("Page for editing entry id " + req.params.entry_id);
// });

// redirect to home page if not found

router.get("*", (req, res) => {
  res.redirect("/");
});

// export router
module.exports = router;