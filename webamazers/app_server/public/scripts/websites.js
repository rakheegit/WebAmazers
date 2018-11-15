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

function onInsert() {
    var markup =
        "<tr><td contentEditable='true' id='insertWebsiteName'>Website Name</td>" +
        "<td contentEditable='true' id='insertCountryRank'>Country Rank</td>" +
        "<td contentEditable='true' id='insertSafety'>Child Safety</td>" +
        "<td contentEditable='true' id='insertTrustworthiness'>Trustworthiness</td>" +
        "<td contentEditable='true' id='insertPageView'>Average Daily Page Views</td>" +
        "<td contentEditable='true' id='insertPrivacy'>Privacy</td>" +
        "<td><button onclick=insertFields(event)>Insert </button></td></tr>";
    $("table tbody").append(markup);
}

function insertFields(e) {
    var Website = {
        website: $("#insertWebsiteName")[0].innerText,
        country: $("#insertCountryRank")[0].innerText,
        safety: $("#insertSafety")[0].innerText,
        trust: $("#insertTrustworthiness")[0].innerText,
        pageview: $("#insertPageView")[0].innerText,
        privacy: $("#insertPrivacy")[0].innerText
    };
    e.preventDefault();
    $.ajax({
        url: "/insertDbData",
        type: "POST",
        data: Website,
        success: function(data) {
            alert(data.msg);
            window.location.reload();
        }
    });
}