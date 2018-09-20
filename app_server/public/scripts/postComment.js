function myPost() {
    var para = document.createElement("p");
    var t = document.createTextNode(document.getElementById("name").value);
    para.appendChild(t);
    document.getElementById("commentPerson").appendChild(para);

    var para1 = document.createElement("p");
    var n = document.createTextNode(document.getElementById("comment").value);
    para1.appendChild(n);
    document.getElementById("commentsHistory").appendChild(para1);
}

function myFocus(x) {
    if (x.value = 'Name' || 'Email address') {
        x.style.color = '#000';
        x.value = '';
    }
}

function myBlur(y) {
    if (y.value == '') {
        y.style.color = '#BBB';
        document.getElementById('name').placeholder = "Name";
        document.getElementById('email').placeholder = "Email address";
        document.getElementById('comments').placeholder = "Comments";
    }
}

function read_more() {
    var a = document.getElementById("hidden-first");
    if (a.style.display === 'none') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}

function searchme() {
    var input, filter, table, tr, td, i;
    var checkname = document.getElementById("cbred").checked;
    var checkcountry = document.getElementById("cbgreen").checked;
    //document.getElementById("demo").innerHTML = checkname;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    if (checkname) {

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (checkcountry) {

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

function displayChange(type) {
    document.getElementById("searchInput").placeholder = type;
}