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
  var userdetails = {
    name: $("#username")[0].value,
    pass: $("#password")[0].value,
    pref: []
  };
  var prefs = $(".categories-list").children("input");
  var count = 0;
  for (var i = 0; i < prefs.length; i++) {
    if (prefs[i]["checked"]) {
      count = count + 1;
      userdetails.pref.push(prefs[i]["value"]);
    }
  }
  if (count < 1) {
    alert("please choose at least one category from the perfernce");
  } else {
    $.ajax({
      type: "POST",
      url: "/createuser",
      data: userdetails,
      success: function(res) {
        alert(res.msg);
      }
    });
  }
});
