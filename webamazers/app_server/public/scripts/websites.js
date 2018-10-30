

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

function insertFields() {
    var body = {
        website: $('#insertWebsite')[0].innerText,
        country: $('#insertCountryRank')[0].innerText,
        safety: $('#insertChildSafety')[0].innerText,
        trust: $('#insertTrustworthiness')[0].innerText,
        pageview: $('#insertAvgDailyPageviews')[0].innerText,
        privacy: $('#insertPrivacy')[0].innerText
    }
    $('#submitToEnter').submit();
    // write api calls to insert into db
}
