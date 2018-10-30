

$(function () {
    $("table").on('click', '.editButton', function (e) {
        $rows = $(this).closest('tr')[0].children;
        $webId = $(this).closest('tr')[0].id
        var WebsiteData = {
            _id: $webId,
            Website: $rows[0].textContent,
            Country_Rank: $rows[1].textContent,
            Child_Safety: $rows[2].textContent,
            Trustworthiness: $rows[3].textContent,
            Avg_Daily_Pageviews: $rows[4].textContent,
            Privacy: $rows[5].textContent
        }
        e.preventDefault(); // cancel the link itself
        $.post({
            url: "/editDbData",
            data: WebsiteData,
            success: function (data) {
                alert(data.msg);
            }
        })

    });
});

$(function () {
    $("table").on('click', '.deleteButton', function (e) {
        $webId = $(this).closest('tr')[0].id
        website = {
            _id: $webId,
        }
        e.preventDefault(); // cancel the link itself
        $.ajax({
            url: "/deleteFromDB",
            type: 'DELETE',
            data: website,
            success: function (data) {
                alert(data.msg);
                window.location.reload();
            }
        })

    });
});
function onInsert() {
    var markup =
        "<tr><td contentEditable='true' id='insertWebsiteName'>Website Name</td>"
        + "<td contentEditable='true' id='insertCountryRank'>Country Rank</td>"
        + "<td contentEditable='true' id='insertSafety'>Child Safety</td>"
        + "<td contentEditable='true' id='insertTrustworthiness'>Trustworthiness</td>"
        + "<td contentEditable='true' id='insertPageView'>Average Daily Page Views</td>"
        + "<td contentEditable='true' id='insertPrivacy'>Privacy</td>"
        + "<td><button onclick=insertFields(event)>Insert </button></td></tr>";
    $("table tbody").append(markup);

}

$(function () {
    $("table").on('click', '.deleteButton', function (e) {
        $webId = $(this).closest('tr')[0].id
        website = {
            _id: $webId,
        }
        e.preventDefault(); // cancel the link itself
        $.ajax({
            url: "/deleteFromDB",
            type: 'DELETE',
            data: website,
            success: function (data) {
                alert(data.msg);
                window.location.reload();
            }
        })

    });
});
function searchDB(e) {
    e.preventDefault();
    var Website = {
        website: $('#websiteName')[0].value
    }
    $.ajax("/searchFromDB", { data: Website },
    )
}
function insertFields(e) {
    var Website = {
        website: $('#insertWebsiteName')[0].innerText,
        country: $('#insertCountryRank')[0].innerText,
        safety: $('#insertSafety')[0].innerText,
        trust: $('#insertTrustworthiness')[0].innerText,
        pageview: $('#insertPageView')[0].innerText,
        privacy: $('#insertPrivacy')[0].innerText
    }
    e.preventDefault();
    $.ajax({
        url: "/insertDbData",
        type: 'POST',
        data: Website,
        success: function (data) {
            alert(data.msg);
            window.location.reload();
        }
    })

    // write api calls to insert into db
}
