// this file configures passport

// use local strategy for logging in directly through our app

// log in with email

// define what happens when a user attempts to sign in

  // search database for email

  // if not found, return no user data

  // if found, check password

  // if incorrect, return no user data

  // if correct, return data for the user

// serialize and deserialize the user (i.e. store their data in a cookie when they're logged in)