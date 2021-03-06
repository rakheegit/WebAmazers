$(window).load(function() {
    $("#loader").fadeOut("slow");
});
google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawLineChart);
//google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawChart_social_avg_monthly);
google.charts.setOnLoadCallback(drawChart_change_in_traffic);
google.charts.setOnLoadCallback(drawChart_stackedchart);
google.charts.setOnLoadCallback(drawChart_stackedchart_mobdesk_all);
google.charts.setOnLoadCallback(drawChart_hightraffic_all);
google.charts.setOnLoadCallback(drawChart_timetraffic_all);
google.charts.setOnLoadCallback(drawChart_bouncestack);

//google.charts.setOnLoadCallback(drawChart_social);
//google.charts.setOnLoadCallback(get_total);
//google.charts.setOnLoadCallback(getPercentage);
//google.charts.setOnLoadCallback(getPercentagePrivacy);


function drawChart_stackedchart() {

    $.ajax({
        url: "/allcategories_stackedchart",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = [];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {

                    if (col == "Unique_Users") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else

                    if (col == "Domain") {
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
                title: 'Websites with Highest Unique Visitors Count',
                //isStacked: true,
                hAxis: { title: "Unique visitors count", format: 'short' },
                colors: ["#9999ff"],
                width: 1150,
                height: 650,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('stackedchart'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_bouncestack() {

    $.ajax({
        url: "/allcategories_bouncestack",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = [];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {


                    if (col == "Bouncing_Visits") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(2, 0, result[col]);
                    } else
                    if (col == "non_Bouncing_Visits") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else



                    if (col == "Domain") {
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
                title: 'Ratio of Bounced Visitis to Total Visits',
                isStacked: true,
                vAxis: { title: "Number of visits - in millions", format: 'short' },
                hAxis: { title: 'Top 100 Most Visited sites', textPosition: 'none' },
                //  hAxis: { title: 'Top 100 Most Visited sites', slantedText: true, textPosition: 'out' },
                colors: ["#9999ff", "#ffcc00"],
                width: 1350,
                height: 600,
                bar: { groupWidth: "88%" },
                legend: { position: "right" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('bouncestack'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_social_avg_monthly() {

    $.ajax({
        url: "/allcategories_social_avg_monthly",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = ["#CE3175", "#CE3175", "#DBB1CD", "#DBB1CD", "#DBB1CD", "#DBB1CD", "#DBB1CD"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "Avg_Month_Visits") {

                        result[col] = parseFloat(result[col]);
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
                title: 'Most Visited Social Networking Sites',
                //isStacked: true,
                //     vAxis: { title: "Domain" },
                width: 750,
                height: 500,
                bar: { groupWidth: "60%" },
                legend: { position: "none" },
                vAxis: { title: 'Average Monthly visits', format: 'short' },
                hAxis: { title: 'Social Networking Sites' },
                //   colors: ["#CE3175"],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('socialmonthlyvisitors'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_change_in_traffic() {

    $.ajax({
        url: "/allcategories_change_in_traffic",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = ["#DBB1CD", "#DBB1CD", "#CE3175", "#DBB1CD", "#DBB1CD", "#CE3175", "#DBB1CD"];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    if (col == "increase_from_lastmonth") {

                        result[col] = parseFloat(result[col]);
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
                title: 'Social Networking sites that attract New Traffic',
                //isStacked: true,
                //     vAxis: { title: "Domain" },
                width: 750,
                height: 500,
                bar: { groupWidth: "60%" },
                legend: { position: "none" },
                vAxis: { title: '% of Increase in Traffic from last month' },
                hAxis: { title: 'Social Networking Sites' },
                colors: ["#CE3175"],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('stackedchart_change'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_stackedchart_mobdesk_all() {

    $.ajax({
        url: "/allcategories_stackedchart_mobdesk_all",
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            var colors = [];
            var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {

                    if (col == "Desktop_Share") {

                        result[col] = parseInt(result[col] * 100);
                        tableRow.splice(2, 0, result[col]);
                    } else

                    if (col == "Mobile_Share") {

                        result[col] = parseInt(result[col] * 100);
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
                title: 'Desktop Vs Mobile Visitors',
                isStacked: true,
                //     vAxis: { title: "Domain" },
                width: 1350,
                height: 600,
                bar: { groupWidth: "88%" },
                legend: { position: "right" },
                vAxis: { title: "Percentage %" },
                hAxis: { title: 'Top 100 High Traffic Websites of the world', textPosition: 'none' },
                colors: ['#17a377', '#ffcc99'],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('stackedchart_mobdesk_all'));
            chart.draw(chartData, options);
        }
    })
}



function drawChart_timetraffic_all() {

    $.ajax({
        url: "/allcategories_timetraffic_all",
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
                colors: ['#99ffcc', '#ffcc99'],
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

function drawChart_hightraffic_all() {

    $.ajax({
        url: "/allcategories_hightraffic_all",
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

                    if (col == "traffic_percent") {
                        //   result[col] = parseInt(result[col] * 100);
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
                title: 'High Traffic Websites - Top 20',
                colors: ['#ff99cc'],
                width: 1150,
                height: 650,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
                vAxis: { title: "Percentage of Total Web traffic" }
                //  vAxis: { format: 'percent' }

            };

            var chart = new google.visualization.ColumnChart(document.getElementById('hightraffic'));
            chart.draw(chartData, options);
        }
    })
}