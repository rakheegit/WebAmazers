google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart_traffic_share_movies);
google.charts.setOnLoadCallback(drawChart_bouncerate_movies);
google.charts.setOnLoadCallback(drawChart_newuser_movies);
google.charts.setOnLoadCallback(drawChart_website_change_movies);

function drawChart_traffic_share_movies() {

    $.ajax({
        url: "/get_movies_traffic_share",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;
            var columns = Object.keys(results[0]);
            var colors = ["#f4a142", "grey", "grey", "grey", "grey"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {

                    if (col == "Traffic_Share") {

                        result[col] = parseFloat(result[col]) * 100;
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
                title: 'Adsense enabled Movie websites with traffic share',
                vAxis: { title: "Traffic Share" },
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('trafficShare'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_bouncerate_movies() {

    $.ajax({
        url: "/dashboard_bouncerate_movies",
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

function drawChart_newuser_movies() {

    $.ajax({
        url: "/dashboard_newuser_movies",
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

            var chart = new google.visualization.ColumnChart(document.getElementById('uniqueUsers'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_website_change_movies() {

    $.ajax({
        url: "/dashboard_website_change_movies",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = ["#f4a142", "grey", "grey", "grey", "grey"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Website_Change") {

                        result[col] = parseInt(result[col] * 100);
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
                title: 'Website that doing better than Past Month',
                vAxis: { title: "Change in Monthly Visits" },
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('websiteChange'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_dashboard_timespent() {

    $.ajax({
        url: "/dashboard_timespent",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = [];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Pages_Per_Visit") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(2, 0, result[col]);
                    } else
                    if (col == "Avg_Visit_Duration") {

                        result[col] = parseInt(result[col] / 60);
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
                width: 1150,
                height: 650,
                legend: { position: "right" },
                colors: ['#f4a142', '#55d6aa'],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false

                }

            };

            var chart = new google.visualization.ScatterChart(document.getElementById('timespent'));
            //var chart = new google.charts.Bar(document.getElementById('timetraffic_all'));

            chart.draw(chartData, options);
        }
    })
}