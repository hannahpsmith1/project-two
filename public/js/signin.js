$(document).ready(() => {
  // when submit button is clicked, do stuff
  $("#submit").on("click", event => {
    event.preventDefault();

    const user = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    }

    // validate nonempty
    if (!user.email || !user.password) {
      return;
    }

    // make request to create user
    $.post("/signIn", user);

    // clear inputs
    $("#email").val("");
    $("#password").val("");

  });
});