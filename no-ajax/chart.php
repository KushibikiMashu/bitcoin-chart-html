<?php

require_once('index.php');

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" href="theme.css" type="text/css"> </head>

  <title>My Chart</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <style>
    canvas {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  </style>

<body>

<canvas id="display1">
  Canvas not supported...
</canvas>
<canvas id="display2">
  Canvas not supported...
</canvas>
<canvas id="display3">
  Canvas not supported...
</canvas>

  <div type="hidden" id="zaif" style="display:none;" value="<?=htmlspecialchars($zaif_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="coincheck" style="display:none;" value="<?=htmlspecialchars($coincheck_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="bitflyer" style="display:none;" value="<?=htmlspecialchars($bitflyer_prices, ENT_QUOTES, 'UTF-8')?>"></div>

  <div type="hidden" id="datetime" style="display:none;" value="<?=htmlspecialchars($datetime, ENT_QUOTES, 'UTF-8')?>"></div>
  

  <script src="script.js"></script>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <pingendo onclick="window.open('https://pingendo.com/', '_blank')" style="cursor:pointer;position: fixed;bottom: 10px;right:10px;padding:4px;background-color: #00b0eb;border-radius: 8px; width:250px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px;color:white">Made with Pingendo Free&nbsp;&nbsp;
    <img src="https://pingendo.com/site-assets/Pingendo_logo_big.png" class="d-block" alt="Pingendo logo" height="16">
  </pingendo>
</body>

</html>