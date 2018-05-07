  (function() {
    'use strict';

    var doc = document;
    var zaif_prices, bitflyer_prices, coincheck_prices, datetime;

    var list = [ zaif_prices, bitflyer_prices, coincheck_prices, datetime ];
    var id   = [ 'zaif_prices', 'bitflyer_prices', 'coincheck_prices', 'datetime' ];

    // HTMLから取得したstringをjsonに変換
    for(var i = 0; i < list.length; i++){
       list[i] = JSON.parse(doc.getElementById(id[i]).getAttribute('value'));
    }

    var day, week, month;

    day     = -24;
    week    = day * 7;
    month   = day * 30;

    // 表示させるcanvasのid
    var canvas_id = {day:"display1", week:"display2", month:"display3"};

    // チャートの実装
    //day
    window.addEventListener('load', function(){

      var list_day = [];

      // 配列listのデータを1日分に整形する
      for(var i = 0; i < list.length; i++){
         list_day[i] = list[i].slice(day);
      }

      display_chart(list_day[0], list_day[1], list_day[2], list_day[3], canvas_id.day)

    });

    // week
    window.addEventListener('load', function(){

      var list_week = [];

      // 配列listのデータを7日分に整形する
      for(var i = 0; i < list.length; i++){
         list_week[i] = list[i].slice(week);
      }

      display_chart(list_week[0], list_week[1], list_week[2], list_week[3], canvas_id.week)

    });

    // month
    window.addEventListener('load', function(){

      var list_month = [];

      // 配列listのデータを39日分に整形する
      for(var i = 0; i < list.length; i++){
         list_month[i] = list[i].slice(month);
      }

      display_chart(list_month[0], list_month[1], list_month[2], list_month[3], canvas_id.month)


    });



// chartを作成
  function display_chart(zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id){

    var type, data, options;
    var ctx, myChart;

    type = 'line';

    data = {
        // 時間
        labels: datetime,
        datasets: [
        {
          // 取引所１
          label: 'zaif',
          // 金額
          data: zaif_prices,
          // 色
          backgroundColor: 'rgba(0, 0, 255, 0.3)',
        }
         , {
          // 取引所２
          label: 'bitflyer',
          // 金額
          data: bitflyer_prices,
          // 色
          backgroundColor: 'rgba(0, 255, 255, 0.3)',
        }
         , {
          // 取引所３
          label: 'coincheck',
          // 金額
          data: coincheck_prices,
          // 色
          backgroundColor: 'rgba(255, 0, 255, 0.3)',
        }
        ]
    };

    ctx = document.getElementById(canvas_id).getContext('2d');

    myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });
  }

  })();