$(function(){

  (function() {
    'use strict';

    var doc = document;
    var zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id;

    zaif_prices         = JSON.parse(doc.getElementById('zaif_prices').getAttribute('value'));
    bitflyer_prices     = JSON.parse(doc.getElementById('bitflyer_prices').getAttribute('value'));
    coincheck_prices    = JSON.parse(doc.getElementById('coincheck_prices').getAttribute('value'));
    datetime            = JSON.parse(doc.getElementById('datetime').getAttribute('value'));

    canvas_id = {day:"display1", week:"display2", month:"display3"};

    var day, week, month;

    day     = -24;
    week    = day * 7;
    month   = day * 30;


    // month
    window.addEventListener('load', function(){

      zaif_prices         = zaif_prices.slice(month);
      bitflyer_prices     = bitflyer_prices.slice(month);
      coincheck_prices    = coincheck_prices.slice(month);
      datetime            = datetime.slice(month);

      make_chart(zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id.month)

    });

    // week
    window.addEventListener('load', function(){

      zaif_prices         = zaif_prices.slice(week);
      bitflyer_prices     = bitflyer_prices.slice(week);
      coincheck_prices    = coincheck_prices.slice(week);
      datetime            = datetime.slice(week);

      make_chart(zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id.week)

    });

    //day
    // $('#day').on( 'click', function(){
    window.addEventListener('load', function(){

      zaif_prices         = zaif_prices.slice(day);
      bitflyer_prices     = bitflyer_prices.slice(day);
      coincheck_prices    = coincheck_prices.slice(day);
      datetime            = datetime.slice(day);

      make_chart(zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id.day)

    });






// chartを作成
  function make_chart(zaif_prices, bitflyer_prices, coincheck_prices, datetime, canvas_id){

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

});