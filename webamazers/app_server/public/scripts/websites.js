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
    $("table").on("click", ".showButton", function(e) {
        e.preventDefault(); // cancel the link itself
        $webId = $(this).closest("tr")[0].id;
        // alert($webId)
        $.get({
            url: "/websites/" + $webId,
            success: function(data) {
                loadModel(data.websites[0]);
            }
        });
    });
});


$(function() {
    $("table").on("click", ".deleteButton", function(e) {
        $webId = $(this).closest("tr")[0].id;
        
        e.preventDefault(); // cancel the link itself
        $.ajax({
            url: "/deleteFromDB/"+$webId,
            type: "DELETE",
            success: function(data) {
                alert(data.msg);
                window.location.reload();
            }
        });
    });
});


function add_website() {
  $.ajax({
    url: "/newwebsite",
    type: "GET",
    success: function(data) {
        load_new_web_form(data.body)
    }
});
}
