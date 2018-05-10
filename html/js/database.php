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
}
catch (Exception $e)
{
	print 'データーベース接続エラー発生';
	print '現在、復旧作業中です。しばらくお待ちください。';
	exit();
}

// 最高値のデータ（カラム名をキーにした連想配列）	
$sql = 'SELECT * FROM bitcoin_exchange';

$stmt = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$zaif_prices 		= [];
$bitflyer_prices 	= [];
$coincheck_prices 	= [];
$datetime 			= [];


// 1時間ごとの取得
foreach ($stmt as $key => $value) {
	$rest		= $value['id'] % 3;
	$price		= $value['price'];
	$created_at	= $value['created_at'];

	switch ($rest) {
		case '1': // zaif
			$zaif_prices[]	= $price;
			break;

		case '2': // bitflyer
			$bitflyer_prices[]	= $price;
			break;
		
		case '0': // coincheck
			$coincheck_prices[]	= $price;
			// $datetime[] = $created_at;
			$datetime[] = substr($created_at, 0, -1) . '0';
			
			break;

		default:
			
			break;
	}
}

$timestamp = [];
$json_array = [];

// highchartsの形式に合わせる
// [ [タイムスタンプ, 金額], [タイムスタンプ, 金額]... ]
for($i=0, $len = count($datetime); $i<$len; $i++){

	$timestamp[] = strtotime($datetime[$i]) . '000';

	$zaif_array[]		 = [(int)$timestamp[$i], (int)$zaif_prices[$i]];
	$bitflyer_array[] 	 = [(int)$timestamp[$i], (int)$bitflyer_prices[$i]];
	$coincheck_array[] 	 = [(int)$timestamp[$i], (int)$coincheck_prices[$i]];
}

// 配列をjsonに変換
$zaif_array 		= json_encode($zaif_array);
$bitflyer_array		= json_encode($bitflyer_array);
$coincheck_array 	= json_encode($coincheck_array);

// jsonに出力する
file_put_contents('json/zaif.json', $zaif_array);
file_put_contents('json/bitflyer.json', $bitflyer_array);
file_put_contents('json/coincheck.json', $coincheck_array);
