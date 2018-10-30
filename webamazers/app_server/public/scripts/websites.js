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
}