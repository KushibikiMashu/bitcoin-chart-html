$(function(){
var doc = document;
var zaif, bitflyer, coincheck, datetime;

// var list = [ zaif, bitflyer, coincheck, datetime ];
// var id   = [ 'zaif', 'bitflyer', 'coincheck', 'datetime' ];
// var list = [ zaif, bitflyer, coincheck ];
// var id   = [ 'zaif', 'bitflyer', 'coincheck' ];

// var len = list.length;
var i;

// list['zaif']      = JSON.parse(doc.getElementById(id[0]).getAttribute('value'));
// list['bitflyer']  = JSON.parse(doc.getElementById(id[1]).getAttribute('value'));
// list['coincheck'] = JSON.parse(doc.getElementById(id[2]).getAttribute('value'));
// list['datetime']  = JSON.parse(doc.getElementById(id[3]).getAttribute('value'));


// HTMLから取得したstringをjsonに変換
// for(i = 0; i < len; i++){
//    list[i] = JSON.parse(doc.getElementById(id[i]).getAttribute('value'));
// }

// console.log(list);

var seriesOptions = [],
  seriesCounter = 0,
  names = ['Zaif', 'bitflyer', 'coincheck'];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

  Highcharts.stockChart('container', {

    rangeSelector: {
      selected: 4
    },

    yAxis: {
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },

    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true
      }
    },

    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },

    series: seriesOptions
  });
}

// listがeach文の中で読まれていない。配列の中でlistを定義するのもあり？
$.each(names, function (i, name, list) {

  var list = [ zaif, bitflyer, coincheck ];
var id   = [ 'zaif', 'bitflyer', 'coincheck' ];

  // for(i = 0; i < len; i++){
   list[i] = JSON.parse(doc.getElementById(id[i]).getAttribute('value'));
// }
// 
console.log(list);

    seriesOptions[i] = {
      name: name,
      data: list
    }

    // As we're loading the data asynchronously, we don't know what order it will arrive. So
    // we keep a counter and create the chart when all the data is loaded.
    seriesCounter += 1;

    if (seriesCounter === names.length) {
      createChart();
    
  };
});
});