$(function() {
  $("#websiteName").on("keyup", function() {
    var value = $(this).val();
    $("#infotip").hide();
    $(".leftwebsites").each(function(index) {
      if (index != 0) {
        $row = $(this);
        var id = $row.find("td:first").text();
        if (id.indexOf(value) != 0) {
          $(this).hide();
        } else {
          $(this).show();
        }
      }
    });
  });
});

$(function() {
  $(document.onload(function() {
      alert("okay")
  }));
});
