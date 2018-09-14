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