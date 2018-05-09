var seriesOptions = [],
    seriesCounter = 0,
    names = ['Zaif', 'bitflyer', 'coincheck'];


/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.stockChart('container', {

      chart: {
        height: 525,
      },

      title: {
        text: 'Bitcoin price of main exchanges'
      },

        rangeSelector: {
            allButtonsEnabled: false,
            selected: 4
        },

        yAxis: {
            plotLines: [{
                value: 0,
                width: 2,
                color: 'white'
            }]
        },

      legend: {
        enabled: true
      },

        plotOptions: {
            series: {
                compare: 'price',
                showInNavigator: true
            },
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,1f}</b><br/>',
            valueDecimals: 0,
            split: true,
        },

        series: seriesOptions
    });
}

// カンマ区切り
Highcharts.setOptions({
  lang: {
    // 桁区切りの文字を指定
    thousandsSep: ','
  }
});

var loc = window.location;
var dir = loc.origin + getDir(loc);

$.each(names, function (i, name) {

    $.getJSON(dir + 'highcharts/json/' + name.toLowerCase() + '.json',    function (data) {

        seriesOptions[i] = {
            name: name,
            data: data
        };

        // As we're loading the data asynchronously, we don't know what order it will arrive. So
        // we keep a counter and create the chart when all the data is loaded.
        seriesCounter += 1;

        if (seriesCounter === names.length) {
            createChart();
        }
    });
});

//  現在のディレクトリを取得
function getDir(place, n) {
　　return place.pathname.replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((n || 0) + 1) + "}$"), "/");
}