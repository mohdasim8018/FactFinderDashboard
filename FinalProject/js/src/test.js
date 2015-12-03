$(function () {

    d3.json("dataset/us-states.json", function(data) {
        $('#container').highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : 'US population density (/km�)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                //data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                //joinBy: ['region', 'region'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km�'
                }
            }]
        });
    });
});