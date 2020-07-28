// this file creates and starts the server

// import dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// create the app
const app = express();
const PORT = process.env.PORT || 8080;

// parse data sent in requests
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// send public file
app.use(express.static("./public"));

// use handlebars templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
const trailsApiRoutes = require("./controllers/trails-api-routes.js");
const favoritesApiRoutes = require("./controllers/favorites-api-routes.js");
const entriesApiRoutes = require("./controllers/entries-api-routes.js");
const htmlRoutes = require("./controllers/html-routes.js");

// add routes
app.use(htmlRoutes);
app.use(trailsApiRoutes);
app.use(favoritesApiRoutes);
app.use(entriesApiRoutes);

// listen
app.listen(PORT, () => {
  console.log("App now listening at http://localhost:" + PORT);
});