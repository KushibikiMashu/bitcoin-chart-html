'use strict';

var doc = document;
var zaif, bitflyer, coincheck, datetime;

var list = [ zaif, bitflyer, coincheck, datetime ];
var id   = [ 'zaif', 'bitflyer', 'coincheck', 'datetime' ];

var len = list.length;

// HTMLから取得したstringをjsonに変換
for(i = 0; i < len; i++){
   list[i] = JSON.parse(doc.getElementById(id[i]).getAttribute('value'));
}

var day     = -24,
    week    = day * 7,
    month   = day * 30;

// チャートを表示させるcanvasのid
var canvas_id = {
      day   : "display1",
      week  : "display2",
      month : "display3",
    };

// チャートの実装
//day
window.addEventListener('load', function(){

  var list_day = [];

  // 配列listのデータを1日分に整形する
  for(i = 0; i < len; i++){
     list_day[i] = list[i].slice(day);
  }

  display_chart(list_day[0], list_day[1], list_day[2], list_day[3], canvas_id.day)

});

// week
window.addEventListener('load', function(){

  var list_week = [];

  // 配列listのデータを7日分に整形する
  for(i = 0; i < len; i++){
     list_week[i] = list[i].slice(week);
  }

  display_chart(list_week[0], list_week[1], list_week[2], list_week[3], canvas_id.week)

});

// month
window.addEventListener('load', function(){

  var list_month = [];

  // 配列listのデータを30日分に整形する
  for(i = 0; i < len; i++){
     list_month[i] = list[i].slice(month);
  }

  display_chart(list_month[0], list_month[1], list_month[2], list_month[3], canvas_id.month)

});


// chartを作成
function display_chart(zaif, bitflyer, coincheck, datetime, canvas_id){

  var type, data, options, option;
  var ctx, myChart;

  type = 'line';

  data = {
      // 時間
      labels: datetime,
      datasets: [
      {
        // 取引所１
        label: 'Zaif',
        // 金額
        data: zaif,
        // 色
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        // 点のサイズ
        pointRadius: 0.5,
      }
       , {
        // 取引所２
        label: 'bitflyer',
        // 金額
        data: bitflyer,
        // 色
        backgroundColor: 'rgba(0, 255, 255, 0.3)',
        // 点のサイズ
        pointRadius: 0.5,
      }
       , {
        // 取引所３
        label: 'coincheck',
        // 金額
        data: coincheck,
        // 色
        backgroundColor: 'rgba(255, 0, 255, 0.3)',
        // 点のサイズ
        pointRadius: 0.5,
      }
      ]
  };

  option = {
      scales : {
        fontSize : 16
      },
      layout: {
          padding: {
              left: 30,
              right: 30,
              top: 0,
              bottom: 0
          }
      }
  };

  ctx = document.getElementById(canvas_id).getContext('2d');

  myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: option
  });

}