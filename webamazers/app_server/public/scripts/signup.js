$("#custom-select").on("click", function() {
  $("#custom-select-option-box").toggle();
});

$("#down-arrow").on("click", function() {
  $("#custom-select-option-box").toggle();
});
function toggleFillColor(obj) {
  $("#custom-select-option-box").show();
  if ($(obj).prop("checked") == true) {
    $(obj)
      .parent()
      .css("background", "#c6e7ed");
  } else {
    $(obj)
      .parent()
      .css("background", "#FFF");
  }
}
$(".categories-list").on("click", function() {
  var checkboxObj = $(this).children("input");
  if ($(checkboxObj)) {
    if ($(checkboxObj).prop != null) {
      if ($(checkboxObj).prop("checked") == true) {
        $(checkboxObj).prop("checked", false);
      } else {
        $(checkboxObj).prop("checked", true);
      }
    }
  }
  toggleFillColor(checkboxObj);
});

$("body").on("click", function(e) {
  if (
    e.target.id != "custom-select" &&
    $(e.target).attr("class") != "custom-select-option"
  ) {
    $("#custom-select-option-box").hide();
  }
});

$("#signupbutton").on("click", function(e) {
  //   alert("clicked");
  e.preventDefault();
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;

  var userdetails = {
    name: $("#username")[0].value,
    pass: $("#password")[0].value,
    pref: []
  };
  if (userdetails.name == "") {
    var error = {
      title: "Empty username",
      body: "Username cannot be empty"
    };
    prompt(error);
  } else if (userdetails.name == userdetails.pass) {
    var error = {
      title: "Error",
      body: "Password cannot be same as username"
    };
    prompt(error);
  } else if (!re.test(userdetails.pass)) {
    var error = {
      title: "Password Error",
      body:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
    };
    prompt(error);
  } else {
    var prefs = $(".categories-list").children("input");
    var count = 0;
    for (var i = 0; i < prefs.length; i++) {
      if (prefs[i]["checked"]) {
        count = count + 1;
        userdetails.pref.push(prefs[i]["value"]);
      }
    }
    if (count < 1) {
      var error = {
        title: "Error while signing up",
        body: "Please choose at least one category from the perference"
      };
      prompt(error);
    } else {
      $.ajax({
        type: "POST",
        url: "/createuser",
        data: userdetails,
        success: function(res) {
          var error = {
            title: "",
            body: res.msg
          };
          if (res.type == "error") {
            error.title = "Error while signing up";
          } else {
            error.title = "Success!!!";
          }
          prompt(error);
        }
      });
    }
  }
});
