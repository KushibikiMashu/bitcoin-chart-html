
$.getJSON(
  'http://localhost:8888/git_personal_no_password/bitcoin_chart/highcharts/json/json.json',
  function (data) {

    Highcharts.chart('container', {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 10
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 0.1,
          states: {
            hover: {
              lineWidth: 0.1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data
      }]
    });
  }
);