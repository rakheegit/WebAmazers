
function onDelete(id){
    //delete from database here
    console.log(id);
}

function onEdit(id){
    console.log(id);
    // console.log(document.getElementById(id)).contentEditable=true;
    $('td[name='+id+']').each(function(i,item){
        item.contentEditable=true;
    });
    if($('#editButton'+id)[0].innerText=="Edit"){
        $('#editButton'+id)[0].innerText="Submit";
    }
    else if($('#editButton'+id)[0].innerText=="Submit"){
        // Update db here
        $('#editButton'+id)[0].innerText="Edit";
    }
}
function onView(id){
    
}

function onInsert(){
    
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
