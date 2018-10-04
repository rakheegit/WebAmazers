$( init );
 
function init() {
  $('#serena').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#puig').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#kerber').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#kvitova').draggable({cursor:"move", containment:"#makeMeDroppable"});
  $('#makeMeDroppable').droppable();
  $('#makeMeDroppable').resizable();
  
}
 

