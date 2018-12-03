google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawLineChart);
//google.charts.setOnLoadCallback(drawColumnChart);
//google.charts.setOnLoadCallback(drawColumnChart1);
//google.charts.setOnLoadCallback(drawChart_bar);
google.charts.setOnLoadCallback(drawChart_newuser);
google.charts.setOnLoadCallback(drawChart_bouncerate_movies);
google.charts.setOnLoadCallback(drawChart_avg_monthly_visits);
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

                        result[col] = parseInt(result[col] / 100000);
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

function drawChart_bouncerate_movies() {

    $.ajax({
        url: "/dashboard_bouncerate_edu",
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {

                    if (col == "Bounce_Rate") {
                        result[col] = parseInt(result[col] * 100);
                        //  result[col] = parseFloat(result[col]);
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
                title: 'Percentage of visitors who view only one page before exiting website',
                colors: ['#EC9787'],
                width: 1150,
                height: 550,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
                vAxis: { title: "Bounce Rate (%)" }
                //  vAxis: { format: 'percent' }

            };

            var chart = new google.visualization.ColumnChart(document.getElementById('bounceRate'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_avg_monthly_visits() {

    $.ajax({
        url: "/dashboard_avg_monthly_visits",
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var columns = Object.keys(results[0]);

            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {

                    if (col == "Avg_Month_Visits") {
                        //  result[col] = parseInt(result[col] * 100);
                        result[col] = parseFloat(result[col]);
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
                title: 'Averaga Monthly Visits',
                colors: ['#BC70A4'],
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
                vAxis: { title: "Monthly Visits" }
                //  vAxis: { format: 'percent' }

            };

            var chart = new google.visualization.ColumnChart(document.getElementById('avg_monthly_visits'));
            chart.draw(chartData, options);
        }
    })
}