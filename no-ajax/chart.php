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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<body>

  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <ul class="nav nav-pills">
            <li class="nav-item" id="day">
              <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone">day</a>
            </li>
            <li class="nav-item" id="week">
              <a class="nav-link" href="#tabtwo" data-toggle="pill" data-target="#tabtwo">weeekly</a>
            </li>
            <li class="nav-item"  id="month">
              <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree">monthly</a>
            </li>
          </ul>

          <div class="tab-content mt-2">
            <div class="tab-pane fade show active" id="tabone" role="tabpanel">
              <canvas id="my_chart_1">
                Canvas not supported...
              </canvas>
            </div>
            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
              <canvas id="my_chart_2">
                Canvas not supported...
              </canvas>
            </div>
            <div class="tab-pane fade" id="tabthree" role="tabpanel">
              <canvas id="my_chart_3">
                Canvas not supported...
              </canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<canvas id="display1">
  Canvas not supported...
</canvas>
<canvas id="display2">
  Canvas not supported...
</canvas>
<canvas id="display3">
  Canvas not supported...
</canvas>

  <div type="hidden" id="zaif_prices" style="display:none;" value="<?=htmlspecialchars($zaif_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="coincheck_prices" style="display:none;" value="<?=htmlspecialchars($coincheck_prices, ENT_QUOTES, 'UTF-8')?>"></div>
  <div type="hidden" id="bitflyer_prices" style="display:none;" value="<?=htmlspecialchars($bitflyer_prices, ENT_QUOTES, 'UTF-8')?>"></div>

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