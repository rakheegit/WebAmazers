google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    $.ajax({
        url: "/dashboardData",
        type: 'GET',
        success: function (resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var temp = [
                ['Chart thing', 'Chart amount'],
                ['Lorem ipsum', 60],
                ['Dolor sit', 22],
                ['Sit amet', 18]
            ];
            
            var data = results.map(function (result) {
                var tableRow = [];
                columns.forEach(function (col) {
                    if(col=="Country_Rank"){
                        result[col]=parseInt(result[col]);
                        tableRow.splice(1,0,result[col]);
                    }
                    else if(col=="Website"){
                        tableRow.splice(0,0,result[col]);
                    }
                });
                return tableRow;
            });
            var tableRow=[];
            columns.forEach(function(col){
                tableRow.push(col);
            })
            data.splice(0,0,tableRow);
            console.log(data);
            console.log(temp);

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
            title: 'Websites with country rank'
            };
        
            var chart = new google.visualization.LineChart(document.getElementById('piechart'));
            chart.draw(chartData, options);   
        }
    })
}