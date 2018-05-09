<?php

header('Content-Type: text/html; charset=UTF-8');

// ビットコインの現在価格をデータベースから取得する
try
{
$dsn='mysql:host=127.0.0.1;dbname=newbitDB;charset=utf8';
$user='root';
$password='root';
$pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

// 最高値のデータ（カラム名をキーにした連想配列）	
// $sql = 'SELECT * FROM bitcoin_exchange WHERE price NOT IN (0)';
$sql = 'SELECT * FROM bitcoin_exchange';

$stmt = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$zaif_prices 		= [];
$bitflyer_prices 	= [];
$coincheck_prices 	= [];
$datetime 			= [];


// 1時間ごとの取得
foreach ($stmt as $key => $value) {
	$rest		= $value['id'] % 12;
	$price		= $value['price'];
	$created_at	= $value['created_at'];

	switch ($rest) {
		case '10': // zaif
			$zaif_prices[]	= $price;
			break;

		case '11': // bitflyer
			$bitflyer_prices[]	= $price;
			break;
		
		case '0': // coincheck
			$coincheck_prices[]	= $price;
			// $datetime[] = substr( $created_at , 0 , strlen($created_at) -3 );
			$datetime[] = $created_at;
			
			break;

		default:
			
			break;
	}
}

// $zaif_prices 		= json_encode($zaif_prices);
// $bitflyer_prices 	= json_encode($bitflyer_prices);
// $coincheck_prices 	= json_encode($coincheck_prices);
// $datetime 			= json_encode($datetime);

$timestamp = [];
$json_array = [];



for($i=0, $len = count($datetime); $i<$len; $i++){
	var_dump(strtotime($datetime[$i]));
	$timestamp[] = strtotime($datetime[$i]) . '000';

	$zaif_array[]		 = [(int)$timestamp[$i], (int)$zaif_prices[$i]];
	$bitflyer_array[] 	 = [(int)$timestamp[$i], (int)$bitflyer_prices[$i]];
	$coincheck_array[] 	 = [(int)$timestamp[$i], (int)$coincheck_prices[$i]];
}

$zaif_array = json_encode($zaif_array);
$bitflyer_array = json_encode($bitflyer_array);
$coincheck_array = json_encode($coincheck_array);

// $arr = [$zaif_prices, $bitflyer_prices, $coincheck_prices];
// $arr = json_encode( $arr );

file_put_contents('zjson.json', $zaif_array);
file_put_contents('bjson.json', $bitflyer_array);
file_put_contents('cjson.json', $coincheck_array);

}
catch (Exception $e)
{
	print 'データーベース接続エラー発生';
	exit();
}