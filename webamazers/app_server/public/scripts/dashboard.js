
var curretCategory = "movies";


function loadCharts(){
    $("#loader").fadeIn("fast");
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { 'packages': ['scatter'] });
    google.charts.setOnLoadCallback(drawChart_edu_mobdesk);
    google.charts.setOnLoadCallback(drawChart_newuser);
    google.charts.setOnLoadCallback(drawChart_avg_monthly_visits);
    google.charts.setOnLoadCallback(drawChart_dashboard_timespent);
    $("#loader").fadeOut("fast");
}

$("#moviesDD").click(function(){
    curretCategory="movies";
    loadCharts();
})
$("#educationDD").click(function(){
    curretCategory="education";
    loadCharts();
})
$("#carrentalsDD").click(function(){
    curretCategory="carrentals";
    loadCharts();
})

// google.charts.setOnLoadCallback(drawChart_dashboard_timespent);
loadCharts();
$(window).ready(function() {
    $("#loader").fadeOut("fast");
});

function drawChart_newuser() {

    $.ajax({
        url: "/dashboard_newuser_"+curretCategory,
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
                
                //title: ' User Favorites to rent Cars',
                title: ' User Favorites for ' + curretCategory,
                vAxis: { title: "No. of Unique users" },
                width: 580,
                height: 320,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
                
            };

            /*    var chart = new google.visualization.ColumnChart(document.getElementById('newuser'));
                chart.draw(chartData, options);*/
            var chart = new google.charts.Bar(document.getElementById('newuser'));

            chart.draw(chartData, google.charts.Bar.convertOptions(options));
        }
    })
}

function drawChart_avg_monthly_visits() {

    $.ajax({
        url: "/dashboard_avg_monthly_visits_"+curretCategory,
        type: 'GET',
        success: function(resData) {
            console.log(resData.webs);
            var results = resData.webs;
            var i = 0;
            var columns = Object.keys(results[0]);
            var colors = ["#f4a142", "#f4a142", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"];
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
                title: 'Averaga Monthly Visits',
                //colors: ['#BC70A4'],
                width: 500,
                height: 320,
                legend: { position: "none" },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
                vAxis: { title: "Monthly Visits" },
                
                //  vAxis: { format: 'percent' }

            };

            var chart = new google.visualization.ColumnChart(document.getElementById('avg_monthly_visits'));
            chart.draw(chartData, options);
        }
    })
}



function drawChart_edu_mobdesk() {

    $.ajax({
        url: "/dashboard_mobdesk_"+curretCategory,
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
                width: 500,
                height: 320,
                bar: { groupWidth: "75%" },
                legend: { position: "right" },
                vAxis: { title: "Percentage %" },
                hAxis: { title: 'Top 10 Ranked Websites' },
                colors: ['#17a377','#ffcc99'],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('edu_mobdesk'));
            chart.draw(chartData, options);
        }
    })
}

function drawChart_dashboard_timespent() {

    $.ajax({
        url: "/dashboard_timespent_"+curretCategory,
        type: 'GET',
        success: function(resData) {
            var results = resData.webs;


            var columns = Object.keys(results[0]);
            //   var colors = [];
            //    var i = 0;
            var data = results.map(function(result) {
                var tableRow = [];
                columns.forEach(function(col) {
                    /*
                          if (col == "Pages_Per_Visit") {

                              result[col] = parseInt(result[col]);
                              tableRow.splice(2, 0, result[col]);
                          } else
                          */
                    if (col == "Pages_Per_Visit") {

                        result[col] = parseInt(result[col]);
                        tableRow.splice(1, 0, result[col]);
                    } else if (col == "Avg_Visit_Duration") {
                        tableRow.splice(0, 0, result[col] / 60);
                    }
                });

                //     tableRow.splice(3, 0, colors[i]);
                //   i += 1;
                return tableRow;

            });

            var tableRow = [];
            columns.forEach(function(col) {
                    tableRow.push(col);
                })
                //     tableRow.push({ role: 'style' });
            data.splice(0, 0, tableRow);

            var chartData = google.visualization.arrayToDataTable(data);
            var options = {
                width: 580,
                height: 320,
                colors: ['#CE3175'],
                legend: { position: "none" },
                chart: {
                    title: 'Average Time spent / Pages viewed for '+curretCategory+ ' Websites'
                        //     subtitle: 'based on hours studied'
                },
                hAxis: { title: 'Pages Per Visit' },
                vAxis: { title: 'Average Visit Duration' },
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                },
            };
            /*      var options = {
                title: 'Average Time spent / Pages viewed for Educational Websites ',
                //vAxis: { title: "Measure" },
                width: 750,
                height: 650,
                legend: { position: "none" },
                colors: ['#FF6F61'],
                titleTextStyle: {
                    fontSize: 14, // 12, 18 whatever you want (don't specify px)
                    bold: true, // true or false
                }
*/


            var chart = new google.charts.Scatter(document.getElementById('timespent'));
            //var chart = new google.charts.Bar(document.getElementById('timetraffic_all'));

            chart.draw(chartData, google.charts.Scatter.convertOptions(options));
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