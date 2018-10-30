function onDelete(id) {

}

function onEdit(id) {
    console.log(id);
    // console.log(document.getElementById(id)).contentEditable=true;
    $('td[name=' + id + ']').each(function(i, item) {
        item.contentEditable = true;
    });
    if ($('#editButton' + id)[0].innerText == "Edit") {
        $('#editButton' + id)[0].innerText = "Submit";
    } else if ($('#editButton' + id)[0].innerText == "Submit") {
        // Update db here
        $('#editButton' + id)[0].innerText = "Edit";
    }
<<<<<<< HEAD
}
=======
}


function insertFields(){
    var body={
        website: $('#insertWebsite')[0].innerText,
        country: $('#insertCountryRank')[0].innerText,
        safety :$('#insertChildSafety')[0].innerText,
        trust: $('#insertTrustworthiness')[0].innerText,
        pageview: $('#insertAvgDailyPageviews')[0].innerText,
        privacy: $('#insertPrivacy')[0].innerText
    }    
    $('#submitToEnter').submit();
    // write api calls to insert into db
    
}
>>>>>>> 14131afd072d0fe2c95e5e5bb960b4ba36207b0f
