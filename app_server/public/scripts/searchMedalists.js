function searchme() {
    var input, filter, table, tr, td, i, col;
    var checkname = document.getElementById("cbred").checked;
    var checkcountry = document.getElementById("cbgreen").checked;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("searchTable");
    tr = table.getElementsByTagName("tr");
    if (checkcountry) {
        col = 1;
    } else {
        col = 0;
    }
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[col];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function displayChange(type) {
    document.getElementById("searchInput").placeholder = type;
}