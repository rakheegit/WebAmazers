function searchme() {
    var input, filter, table, tr, td, i, col;
    var checkname = document.getElementById("inp1").checked;
    var checkcountry = document.getElementById("inp2").checked;
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

function hideShow() {
    var x = document.getElementById("hideImage");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$( function() {
    $("#slider")
    .slider({
        value: 2000,
        range: true,
        min: 1980,
        max: 2020,
        step: 1,
        change: function(event, ui) {
            minimum=ui.values[0];
            maximum=ui.values[1];
            table = document.getElementById("searchTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[3];
                
                if (td) {
                    const year = td.innerHTML;
                    if (year<minimum || year>maximum) {
                        tr[i].style.display = "none";
                    }
                    else{
                        tr[i].style.display = "";
                    }
                }
            }
        }
    })
    
    .each(function() {
    
        // Add labels to slider whose values 
        // are specified by min, max
    
        // Get the options for this slider (specified above)
        var opt = $(this).data().uiSlider.options;
    
        // Get the number of possible values
        var vals = opt.max - opt.min;
    
        // Position the labels
        for (var i = 0; i <= vals; i+=6) {
    
            // Create a new element and position it with percentages
            var el = $('<label>' + (i + opt.min) + '</label>').css('left', (i/vals*100) + '%');
    
            // Add the element inside #slider
            $("#slider").append(el);
    
        }
    
    });
    
  });

  $(function() {
        $(document).tooltip();
  })
  $(document).ready(function() {
    $('#img1').tooltip({
   position: { 
     my: 'center bottom', 
     at: 'center bottom+10',
     of: '#img1'
   }
 });                  
 $('#img1').tooltip('option', 'tooltipClass', 'top');

 });
