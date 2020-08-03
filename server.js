// this file creates and starts the server

// import dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

// create the app
const app = express();

// get use environmental variables if they exist
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET || "sample secret";

// import models
const db = require("./models");

// import passport configuration
const passport = require("./config/passport.js");

// parse data sent in requests
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// send public file
app.use(express.static("./public"));

// use passport with persistent login sessions
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// use handlebars templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// a route for checking that that the good secret is being used
app.get("/test-secret", (req, res) => {
  if (SESSION_SECRET !== process.env.SESSION_SECRET) {
    // the secret shoud be retrieved from environmental variables to really be a secret
    res.send("The secret is not secure — using development version");
  } else if (SESSION_SECRET.length < 30) {
    // secret should be longer than 30 characters to make it difficult to guess
    res.send("The secret is not secure — too short");
  } else {
    res.send("The secret is secure.");
  }
});

// import routes
const usersApiRoutes = require("./controllers/users-api-routes.js");
const favoritesApiRoutes = require("./controllers/favorites-api-routes.js");
const entriesApiRoutes = require("./controllers/entries-api-routes.js");
const htmlRoutes = require("./controllers/html-routes.js");

// add routes
app.use(htmlRoutes);
app.use(usersApiRoutes);
app.use(favoritesApiRoutes);
app.use(entriesApiRoutes);

// sync the database to the models
db.sequelize.sync().then(function() {
  console.log("The database is synced!!!");
  // listen
  app.listen(PORT, () => {
    console.log("App now listening at http://localhost:" + PORT);
  });
});