$( init );
 
function init() {
  $('#serena').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#puig').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#kerber').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#kvitova').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#makeMeDroppable').droppable(
    {
      drop: function( event, ui ) {
        const id =ui.draggable[0].id;
          if(id==="serena"){
            $( this ).find( "p" )
            .html( "30 peope think that serena will win" )
            .css({
              "color": "green",
              "font-weight": "bolder",
              "text-align":"center",
              "font-size":"20px"
            })
          }
          else if(id==="puig"){
            $( this ).find( "p" )
            .html( "90 peope think that puig will win" )
            .css({
              "color": "blue",
              "font-weight": "bolder",
              "text-align":"center",
              "font-size":"20px"
            })
          }
          else if(id==="kerber"){
            $( this ).find( "p" )
            .html( "Only 3 peope think that kerber will win" )
            .css({
              "color": "red",
              "font-weight": "bolder",
              "text-align":"center",
              "font-size":"20px"
            })
          }
          else if(id==="kvitova"){
            $( this ).find( "p" )
            .html( "13 peope think that kvitova will win" )
            .css({
              "color": "orange",
              "font-weight": "bolder",
              "text-align":"center",
              "font-size":"20px"
            })
            
          }
          
      }
    }
  );
  $('#makeMeDroppable').resizable();
  
}
 

