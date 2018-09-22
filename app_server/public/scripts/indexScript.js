var pattern = new Image();
function animate() {
    pattern.src = '/images/globe.jpeg';
    setInterval(drawShape, 50);
}
var x = 100;
var  y = 200;
x1 = 30;
y1 = 30;
function drawShape() {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pattern,x,y,x1,y1);
    if (x1 < canvas.width/2 && y1< canvas.height/2 && x< canvas.width && y< canvas.height)
    {
        ctx.clear
        x1 = x1 +1;
        y1 = y1 +1;
    }
}