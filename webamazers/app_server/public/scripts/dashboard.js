google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawLineChart);
//google.charts.setOnLoadCallback(drawColumnChart);
//google.charts.setOnLoadCallback(drawColumnChart1);
//google.charts.setOnLoadCallback(drawChart_bar);
google.charts.setOnLoadCallback(drawChart_newuser);
google.charts.setOnLoadCallback(drawChart_ppv_all);
google.charts.setOnLoadCallback(drawChart_timetraffic_all);
//google.charts.setOnLoadCallback(drawChart_social);
//google.charts.setOnLoadCallback(get_total);
//google.charts.setOnLoadCallback(getPercentage);
//google.charts.setOnLoadCallback(getPercentagePrivacy);

function drawChart_newuser() {

    $.ajax({
        url: "/dashboard_newuser",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = ["#f4a142", "grey", "grey", "grey", "grey"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {



                    if (col == "Unique_Users") {

                        result[col] = parseInt(result[col]/100000);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Domain") {
                        tableRow.splice(0, 0, result[col]);
                    }
                });

                tableRow.splice(2, 0, colors[i]);
                i += 1;
                return tableRow;

            });

            var tableRow = [];
            columns.forEach(function(col) {
                tableRow.push(col);
            })
            tableRow.push({ role: 'style' });
            data.splice(0, 0, tableRow);

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'New User Favorites',
                vAxis: { title: "No. of New users" },
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('newuser'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_timetraffic_all() {

    $.ajax({
        url: "/dashboard_timetraffic_all",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = ["#f4a142","#55d6aa"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Pages_Per_Visit") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(2, 0, result[col]);
                    } 
                     if (col == "Avg_Visit_Duration") {

                        result[col] = parseInt(result[col]/60);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Domain") {
                        tableRow.splice(0, 0, result[col]);
                    }
                });

                tableRow.splice(3, 0, colors[i]);
                i += 1;
                return tableRow;

            });

            var tableRow = [];
            columns.forEach(function(col) {
                tableRow.push(col);
            })
            tableRow.push({ role: 'style' });
            data.splice(0, 0, tableRow);

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Domains where people spend considerable time',
                //vAxis: { title: "Measure" },
                width: 550,
                height: 350,
                legend: { position: "right" },
                colors:['#f4a142','#55d6aa'],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
                
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('timetraffic_all'));
            //var chart = new google.charts.Bar(document.getElementById('timetraffic_all'));

            chart.draw(chartData, options);
        }
    })
}

function drawChart_ppv_all() {

    $.ajax({
        url: "/dashboard_ppv_all",
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

                    if (col == "Pages_Per_Visit") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Domain") {
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

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Pages per visit',
                colors: ['#55d6aa'],
                width: 550,
                height: 350,
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }

            };

            var chart = new google.visualization.ColumnChart(document.getElementById('socialchart'));
            chart.draw(chartData, options);
        }
    })
}

