var ctx;
var myRectangle = {
    x: 0,
    y: 500,
    width: 100,
    height: 0,
    borderWidth: 5
};
var start = 0;
var end = 0;

function loadrings() {
    var c = document.getElementById("ring-canvas");
    ctx = c.getContext("2d");
    drawScale();
    for (var i = 0; i < 7; i++) {
        giveLabels(i);
    }
}


fetchData = {
    positions: [70, 190, 310, 430, 550, 670],
    values: [100, 150, 250, 300, 280, 320],
    labels: ["10", "15", "25", "30", "28", "32"],
    years: ["1900", "1910", "1920", "1930", "1940", "1950"],
    color: ["#3E76EC", "#000000", "#FF0000", "#FFCE01", "#179A13", "#3E76EC" ]
}

function animate(i) {
    end = fetchData.values[i];
    if (start < end) {
        myRectangle.height = start;
        start = start + 0.25;
        drawGraphs(i,start);
        requestAnimFrame(function () {
            animate(i);
        });
    }
}

function drawScale() {
    ctx.beginPath();
    ctx.font = '40pt Calibri';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeText('% Of women in Olympics', 30, 55);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.moveTo(50, 500);
    ctx.lineTo(800, 500);
    ctx.moveTo(50, 500);
    ctx.lineTo(50, 80);
    ctx.moveTo(70, 500);
    ctx.stroke();
    ctx.closePath();
}

function giveLabels(i) {
    ctx.beginPath();
    ctx.font = "bold 12px sans-serif";
    ctx.fillStyle = "grey"
    ctx.textAlign = "center";
    ctx.fillText(fetchData.labels[i], fetchData.positions[i] + 50, 490 - fetchData.values[i]);
    ctx.fillText(fetchData.years[i], fetchData.positions[i] + 50, 530);
    ctx.stroke();
    ctx.closePath();
    animate(i);
}

function drawGraphs(x, value) {
    //first value
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.fillStyle = fetchData.color[x]
    ctx.fillRect(fetchData.positions[x], 500, 100, -value);
    ctx.stroke();
    ctx.closePath();
}

