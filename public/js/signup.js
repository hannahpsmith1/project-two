$(document).ready(() => {
  // when submit button is clicked, do stuff
  $("#submit").on("click", event => {
    event.preventDefault();

    const user = {
      email: $("#newEmail").val().trim(),
      password: $("#newPassword").val().trim()
    }

    // validate nonempty
    if (!user.email || !user.password) {
      return;
    }

    // make request to create user
    $.post("/signUp", user);

    // clear inputs
    $("#newEmail").val("");
    $("#newPassword").val("");

  });
});