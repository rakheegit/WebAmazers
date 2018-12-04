$("#loginbutton").on("click", function(e) {
  //   alert("clicked");
  debugger;
  e.preventDefault();
  var userdetails = {
    name: $("#username")[0].value,
    pass: $("#password")[0].value
  };
  $.ajax({
    type: "GET",
    url: "/loginuser",
    data: userdetails,
    success: function(res) {
      if (res.msg instanceof Object) {
        window.localStorage.username = res.msg[0].name;
        window.localStorage.pref = res.msg[0].pref;
        window.location.href = "/home";
      }
    },
    error: function(e) {
      console.log(e);
    }
  });
});
