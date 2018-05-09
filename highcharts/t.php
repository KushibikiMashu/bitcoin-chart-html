<?php

require_once('index.php');

?>

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
<script src="https://code.highcharts.com/stock/modules/export-data.js"></script>
<script src="test.js"></script>

  <div type="hidden" id="zaif" style="display:none;" value="<?=htmlspecialchars($zaif_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="coincheck" style="display:none;" value="<?=htmlspecialchars($coincheck_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="bitflyer" style="display:none;" value="<?=htmlspecialchars($bitflyer_prices, ENT_QUOTES, 'UTF-8')?>"></div>
　<div type="hidden" id="datetime" style="display:none;" value="<?=htmlspecialchars($datetime, ENT_QUOTES, 'UTF-8')?>"></div>

<div id="container" style="height: 400px; min-width: 310px"></div>