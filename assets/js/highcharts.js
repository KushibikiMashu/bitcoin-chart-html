// チャートのデータが古い、または読み込めない場合は、
// ajaxのjson取得アドレスをサーバーに応じて変更する

let seriesOptions = [],
  seriesCounter = 0;
const names = ['Zaif', 'bitflyer', 'coincheck'];

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
      selected: 0,
      buttons: [{
        type: 'minute', // 分単位 (0)
        count: 1440,     // 単位は分
        text: '1d'       // 一日分
      }, {
        type: 'minute',    // 日単位 (1)
        count: 1440 * 7,   // 1週間分
        text: '7d'
      }, {
        type: 'minute',    // 日単位 (2)
        count: 1440 * 7 * 2,   // 2週間分
        text: '2w'
      }, {
        type: 'all',    // 全データ(3)
        count: 1,
        text: 'All'
      }]
    },
    yAxis: {
      plotLines: [{
        value: 0,
        width: 2,
        color: 'white',
      }],
      opposite: false,
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

Highcharts.setOptions({
  global: {
    useUTC: false
  },
  lang: {
    // 桁区切りの文字を指定
    thousandsSep: ',',
    numericSymbols: null
  }
});

async function getData(names) {
  const res = await axios.get('https://script.google.com/macros/s/AKfycbzymYPlML4oiQopSAHEUl7B9Do-W-ECADJ6zKuCYR7g9wkHAJg/exec');
  const data = res.data;

  names.map((name, i) => {
    seriesOptions[i] = {
      name: name,
      data: data[name],
    };

    // As we're loading the data asynchronously, we don't know what order it will arrive. So
    // we keep a counter and create the chart when all the data is loaded.
    seriesCounter += 1;

    if (seriesCounter === names.length) {
      createChart();
    }
  });
}

getData(names);
