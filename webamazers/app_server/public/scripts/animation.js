var caption = 'Know your user\'s journey';
var i = 0;
function loadrings(getElementById) {
    var c = document.getElementById("ring-canvas");
    ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.font = '40pt Calibri';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeText(caption.charAt(i), 400+(i*40), 75);
    ctx.stroke();
    ctx.closePath();
    setTimeout(function(){
        animate()
    }, 500)

}


function animate() {
    i = i + 1
    if (i < 24) {
        loadrings(i);
        requestAnimFrame(function () {
            animate();
        });
    }
}


