$(function() {
  $("table").on("click", ".editButton", function(e) {
    $rows = $(this).closest("tr")[0].children;
    $webId = $(this).closest("tr")[0].id;

    $.get({
      url: "/editDbData/" + $webId,
      success: function(data) {
        loadM(data.websites[0]);
      }
    });
  });
});

$(function() {
  $("table").on("click", ".tableContent", function(e) {
    e.preventDefault(); // cancel the link itself
    $webId = $(this).closest("tr")[0].id;
    $.get({
      url: "/websites/" + $webId,
      success: function(data) {
        loadModel(data.websites[0]);
      }
    });
  });
});
$(function() {
  $("#websiteName").on("keyup", function() {
    var value = $(this).val();
    $("table tr").each(function(index) {
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
  $("table").on("click", ".deleteButton", function(e) {
    $webId = $(this).closest("tr")[0].id;

    e.preventDefault(); // cancel the link itself
    $.ajax({
      url: "/deleteFromDB/" + $webId,
      type: "DELETE",
      success: function(data) {
        alert(data.msg);
        window.location.reload();
      }
    });
  });
});

$(function() {
  $(".addButton").on("click", function(e) {

    e.preventDefault();
    $.ajax({
      url: "/newwebsite",
      type: "GET",
      success: function(data) {
        load_new_web_form(data.body);
      }
    });
  });
});

