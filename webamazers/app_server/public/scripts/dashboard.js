google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawColumnChart1);
google.charts.setOnLoadCallback(drawChart_bar);

function drawBarChart() {

    $.ajax({
        url: "/dashboardData",
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var temp = [
                ['Chart thing', 'Chart amount'],
                ['Lorem ipsum', 60],
                ['Dolor sit', 22],
                ['Sit amet', 18]
            ];

            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Country_Rank") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Website") {
                        tableRow.splice(0, 0, result[col]);
                    }
                });
                return tableRow;
            });
            var tableRow = [];
            columns.forEach(function(col) {
                tableRow.push(col);
            })
            data.splice(0, 0, tableRow);
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

function drawColumnChart() {

    $.ajax({
        url: "/dashboardGraph1",
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var temp = [
                ['Chart thing', 'Chart amount'],
                ['Lorem ipsum', 60],
                ['Dolor sit', 22],
                ['Sit amet', 18]
            ];

            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Avg_Daily_Pageviews") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Website") {
                        tableRow.splice(0, 0, result[col]);
                    }
                });

                return tableRow;

            });
            var tableRow = [];
            columns.forEach(function(col) {
                tableRow.push(col);
            })

            data.splice(0, 0, tableRow);
            console.log(data);
            console.log(temp);


            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Top Websites with daily average Page views'
            };

            chartData.sort({
                column: 1,
                desc: true
            });

            var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
            chart.draw(chartData, options);


        }
    })
}

function drawColumnChart1() {

    $.ajax({
        url: "/dashboardGraph2",
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var temp = [
                ['Chart thing', 'Chart amount'],
                ['Lorem ipsum', 60],
                ['Dolor sit', 22],
                ['Sit amet', 18]
            ];

            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Avg_Daily_Visitors") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Website") {
                        tableRow.splice(0, 0, result[col]);
                    }
                });

                return tableRow;

            });
            var tableRow = [];
            columns.forEach(function(col) {
                tableRow.push(col);
            })

            data.splice(0, 0, tableRow);
            console.log(data);
            console.log(temp);


            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Top Websites with daily average Visitors'
            };

            chartData.sort({
                column: 1,
                desc: true
            });

            var chart = new google.visualization.ColumnChart(document.getElementById('columnchart1'));
            chart.draw(chartData, options);


        }
    })
}

function drawChart_bar() {

    $.ajax({
        url: "/dashboardbar",
        type: 'GET',
        success: function (resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);
            var data = results.map(function (result) {
                var tableRow = [];
                columns.forEach(function (col) {
                    if(col=="Website"){
                        result[col]=parseInt(result[col]);
                        tableRow.splice(5,0,result[col]);
                    }
                    
                    if(col=="Social reference"){
                        result[col]=parseInt(result[col]);
                        tableRow.splice(1,0,result[col]);
                    }
                    else if(col=="_id"){
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
            
            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Most Socially Referred websites',
                colors: ['red'],
                width: 400,
                height: 400,
                legend: { position: "none" },
                };
        
            var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
            chart.draw(chartData, options);   
        }
    })
}
