function onDelete(id) {
    //delete from database here
    console.log(id);
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
}

function onView(id) {

}

function onInsert() {
    var markup =
        "<tr><td contentEditable='true' id='insertWebsiteName'>Website Name</td><td contentEditable='true' id='insertPrivacy'>Privacy</td>" +
        "<td><button onclick=insertFields()>Insert </button></td></tr>";
    $("table tbody").append(markup);
}

function insertFields() {
    console.log($('#insertWebsiteName')[0].innerText);
    console.log($('#insertPrivacy')[0].innerText);

    // write api calls to insert into db
}