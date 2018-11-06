google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawColumnChart1);
google.charts.setOnLoadCallback(drawChart_bar);
google.charts.setOnLoadCallback(drawChart_social);

function drawLineChart() {

    $.ajax({
        url: "/dashboardTopCountries",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;
            var columns = Object.keys(results[0]);
            var colors = ["#55d6aa", "blue", "red", "orange", "skyblue"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Total_Views") {
                        result[col] = parseInt(result[col] / 1000000);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "_id") {
                        if (result[col] == "NA") {
                            result[col] = "India";
                        }
                        tableRow.splice(0, 0, result[col]);
                    }
                });
                tableRow.splice(2, 0, colors[i]);
                i += 1;
                return tableRow;
            });
            var tableRow = [];
            columns.forEach(function(col) {
                if (col == "Total_Views") {
                    col = "Total_Views in Millions"
                }
                tableRow.push(col);
            })
            tableRow.push({ role: 'style' });
            data.splice(0, 0, tableRow);
            console.log(data)
            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Top Countries in Web Usage with daily average page views',
                vAxis: { title: "(in millions)" },
                width: 550,
                height: 400,
                colors: ['#55d6aa'],
                legend: { position: "none" },
            };

            var chart = new google.visualization.BarChart(document.getElementById('topcountries'));
            chart.draw(chartData, options);
        }
    })
}

function drawColumnChart() {

    $.ajax({
        url: "/dashboardGraph1",
        type: 'GET',
        success: function(resData) {

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
                        result[col] = parseInt(result[col] / 1000000);
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

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Top Websites Daily average Page views',
                colors: ['#55d6aa'],
                width: 450,
                height: 400,
                vAxis: { title: "(in millions)" },
                legend: { position: 'none' },
            };

            chartData.sort({
                column: 1,
                desc: true
            });

            var chart = new google.visualization.ColumnChart(document.getElementById('avgpageviews'));
            chart.draw(chartData, options);


        }
    })
}

function drawColumnChart1() {

    $.ajax({
        url: "/dashboardGraph2",
        type: 'GET',
        success: function(resData) {
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
                        result[col] = parseInt(result[col] / 1000000);
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

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'Top Websites with daily average Visitors',
                colors: ['#55d6aa'],
                opacity: [0.2],
                width: 450,
                height: 400,
                vAxis: { title: "(in millions)" },
                legend: { position: 'none' },
            };

            chartData.sort({
                column: 1,
                desc: true
            });

            var chart = new google.visualization.ColumnChart(document.getElementById('avgvisitors'));
            chart.draw(chartData, options);


        }
    })
}

function drawChart_bar() {

    $.ajax({
        url: "/dashboardbar",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;
            var columns = Object.keys(results[0]);
            var colors = ["#55d6aa", "grey", "grey", "grey", "grey"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Website") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(5, 0, result[col]);
                    }

                    if (col == "Social reference") {

                        result[col] = parseInt(result[col] / 1000000);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "_id") {
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
                title: 'Most Socially Referred websites',
                vAxis: { title: "No. of refereneces in Social networks( in millions)" },
                width: 450,
                height: 400,
                legend: { position: "none" },
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('sociallyreferred'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_social() {

    $.ajax({
        url: "/dashboardsocial",
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
                    if (col == "Facebook_likes") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(3, 0, result[col]);
                    }
                    if (col == "Twitter_mentions") {
                        result[col] = parseInt(result[col]);
                        tableRow.splice(2, 0, result[col]);
                    }
                    if (col == "Linkedin_Links") {
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

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                title: 'FaceBook Likes Vs Twitter mentions Vs LinkedIn Links',
                colors: ['#55d6aa', '#DD4477', '#316395'],
                width: 650,
                height: 400,
            
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('socialchart'));
            chart.draw(chartData, options);
        }
    })
}