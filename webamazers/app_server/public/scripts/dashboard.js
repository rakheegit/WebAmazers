google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawLineChart);
//google.charts.setOnLoadCallback(drawColumnChart);
//google.charts.setOnLoadCallback(drawColumnChart1);
google.charts.setOnLoadCallback(drawChart_bar);
google.charts.setOnLoadCallback(drawChart_bouncerate);
//google.charts.setOnLoadCallback(drawChart_social);
//google.charts.setOnLoadCallback(get_total);
//google.charts.setOnLoadCallback(getPercentage);
//google.charts.setOnLoadCallback(getPercentagePrivacy);
/*

*/
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
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('sociallyreferred'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_bouncerate() {

    $.ajax({
        url: "/dashboard_bouncerate",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;
            
            
            var columns = Object.keys(results[0]);
            var colors = ["#55d6aa", "grey", "grey", "grey", "grey"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    
                    
                    
                    if (col == "Bounce_Rate") {

                        result[col] = parseInt(result[col]);
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
                title: 'Most Bouncing Users',
                vAxis: { title: "No. of bouncing users( in millions)" },
                width: 550,
                height: 350,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('mostbounced'));
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