var $jq = jQuery.noConflict();
var chart;
var chartHum;
var chartSpeed;
var chartHujan;
var chartCahaya;
var chartTekanan;
/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepoksuhu',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > (3600*2); // shift if the series is 
                                                 // longer than 20

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chart.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestData, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'suhuChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestData
            }
        },
        title: {
            text: 'Suhu'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Suhu',
                margin: 80
            }
        },
        series: [{
            name: 'Suhu',
            data: []
        }]
    });        
});

function requestDataHum() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepokkelembaban',
        success: function(point) {
            var series = chartHum.series[0],
                shift = series.data.length > (3600*2); // shift kalo udah 2 jam

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chartHum.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestDataHum, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chartHum = new Highcharts.Chart({
        chart: {
            renderTo: 'humidityChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestDataHum
            }
        },
        title: {
            text: 'Kelembaban'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Kelembaban',
                margin: 80
            }
        },
        series: [{
            name: 'Kelembaban',
            data: []
        }]
    });        
});

function requestDataSpeed() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepokkecepatan',
        success: function(point) {
            var series = chartSpeed.series[0],
                shift = series.data.length > (3600*2); // shift kalo udah 2 jam

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chartSpeed.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestDataSpeed, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chartSpeed = new Highcharts.Chart({
        chart: {
            renderTo: 'speedChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestDataSpeed
            }
        },
        title: {
            text: 'Kecepatan Angin'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Kecepatan Angin',
                margin: 80
            }
        },
        series: [{
            name: 'Kecepatan Angin',
            data: []
        }]
    });        
});

function requestDataHujan() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepokhujan',
        success: function(point) {
            var series = chartHujan.series[0],
                shift = series.data.length > (3600*2); // shift kalo udah 2 jam

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chartHujan.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestDataHujan, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chartHujan = new Highcharts.Chart({
        chart: {
            renderTo: 'hujanChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestDataHujan
            }
        },
        title: {
            text: 'Curah Hujan'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Curah Hujan',
                margin: 80
            }
        },
        series: [{
            name: 'Curah Hujan',
            data: []
        }]
    });        
});

function requestDataCahaya() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepokcahaya',
        success: function(point) {
            var series = chartCahaya.series[0],
                shift = series.data.length > (3600*2); // shift kalo udah 2 jam

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chartCahaya.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestDataCahaya, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chartCahaya = new Highcharts.Chart({
        chart: {
            renderTo: 'cahayaChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestDataCahaya
            }
        },
        title: {
            text: 'Intensitas Cahaya'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Intensitas Cahaya',
                margin: 80
            }
        },
        series: [{
            name: 'Intensitas Cahaya',
            data: []
        }]
    });        
});

function requestDataTekanan() {
    $jq.ajax({
        url: '/memce2-web/web/index.php/location/livedepoktekanan',
        success: function(point) {
            var series = chartTekanan.series[0],
                shift = series.data.length > (3600*2); // shift kalo udah 2 jam

            // add the point
            var x = (new Date()).getTime() + (3600000*7), // current time
                                y = parseInt(point);
                                
            chartTekanan.series[0].addPoint([x,y], true, shift);
            
            // call it again after one second
            setTimeout(requestDataTekanan, 1000);
         	
        },
        cache: false
    });
}

$jq(document).ready(function() {
    chartTekanan = new Highcharts.Chart({
        chart: {
            renderTo: 'tekananChart',
            defaultSeriesType: 'spline',
            events: {
                load: requestDataTekanan
            }
        },
        title: {
            text: 'Tekanan Udara'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Tekanan Udara',
                margin: 80
            }
        },
        series: [{
            name: 'Tekanan Udara',
            data: []
        }]
    });        
});