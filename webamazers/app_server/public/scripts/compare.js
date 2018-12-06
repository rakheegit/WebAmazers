var left = undefined;
var right = undefined;

$(function() {
  $("#leftwebsiteName").on("keyup", function() {
    var value = $(this).val();
    if (value == "") {
      $("#lefttable").hide();
      $("#leftinfotip").show();
    } else {
      $("#leftinfotip").hide();
      $("#lefttable").show();
    }
    $("#lefttable tr").each(function(index) {
      // if (index != 0) {
      $row = $(this);
      var id = $row.find("td:first").text();
      if (id.indexOf(value) != 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
      // }
    });
  });
});

$(function() {
  $("#rightwebsiteName").on("keyup", function() {
    var value = $(this).val();
    if (value == "") {
      $("#righttable").hide();
      $("#rightinfotip").show();
    } else {
      $("#rightinfotip").hide();
      $("#righttable").show();
    }
    $("#righttable tr").each(function(index) {
      // if (index != 0) {
      $row = $(this);
      var id = $row.find("td:first").text();
      if (id.indexOf(value) != 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
      // }
    });
  });
});

$(window).on("load", function() {
  $("#lefttable").hide();
  $("#righttable").hide();
  $("#comparebutton")[0].disabled = true;
  $.get({
    type: "GET",
    url: "/comparesites",
    success: function(data) {
      this.website = data;
    }
  });
});

// $(".lefttableContent").click(function(){

//   // var value=$(this).closest("tr")[0].html();
//   // alert(value);
// });

// $(".righttableContent").click(function(){

//   // var value=$(this).closest("tr")[0].html();
//   // alert(value);
// });

$(function() {
  $(".lefttableContent").on("click", function() {
    $(this)
      .closest("tr")
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    left = $(this).closest("tr")[0].id;
    if (right != null) {
      $("#comparebutton")[0].disabled = false;
    }
  });
});

$(function() {
  $(".righttableContent").on("click", function() {
    $(this)
      .closest("tr")
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    right = $(this).closest("tr")[0].id;
    if (left != null) {
      $("#comparebutton")[0].disabled = false;
    }
  });
});

$(function() {
  $("#comparebutton").on("click", function() {
    $.get({
      url: "/comparewebsites/" + left + "/vs/" + right,
      success: function(data) {
        comparemodal(data)
      }
    });
  });
});
