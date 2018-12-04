

$("#loginbutton").on("click", function(e) {
    //   alert("clicked");
    debugger;
    e.preventDefault();
    var userdetails = {
      name: $("#username")[0].value,
      pass: $("#password")[0].value,
    };
    $.ajax({
        type: "GET",
        url: "/loginuser",
        data: userdetails,
        success: function(res) {
          if (res.msg) {
            alert(res.msg);
          }
        },
        error: function(e) {
          console.log(e);
        }
      });
  });
  