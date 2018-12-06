$("#loginbutton").on("click", function(e) {
  //   alert("clicked");
  e.preventDefault();
  var userdetails = {
    name: $("#username")[0].value,
    pass: $("#password")[0].value
  };
  if (userdetails.name == "" || userdetails.pass == "") {
    var error = {
      title: "Empty username",
      body: "Username or password cannot be empty"
    };
    prompt(error);
  } else {
    $.ajax({
      type: "GET",
      url: "/loginuser",
      data: userdetails,
      success: function(res) {
        console.log(res.msg);
        if (res.msg[0] instanceof Object) {
          console.log(res.valid);
          if (res.valid) {
            window.location.href = "/home";
          }
        } else {
          var error = {
            title: "Error while logging in",
            body: res.msg
          };
          prompt(error);
        }
      },
      error: function(e) {
        console.log(e);
      }
    });
  }
});

$(window).on("load", function() {
  console.log(typeof loggedin);
  if (loggedin == "false") {
    var error = {
      title: "Error while loading page",
      body: "Please sign in before you can access the page"
    };
    prompt(error);
  } else {
  }
});
