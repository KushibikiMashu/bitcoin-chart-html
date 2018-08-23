<?php

// ビットコインの現在価格をデータベースから取得する
try {
	// DBはローカルのMySQLを指定する
	$dsn      = 'mysql:host=127.0.0.1;dbname=newbitDB;charset=utf8';
	$user     = 'root';
	$password = 'root';
	$pdo      = new PDO($dsn, $user, $password, [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	]);
} catch (Exception $e) {
	print 'データーベース接続エラー発生';
	print '復旧作業中です。しばらくお待ちください。';
	exit();
}

// カラム名をキーにした連想配列で最高値のデータを取得	
$sql  = 'SELECT * FROM bitcoin_exchange';
$stmt = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

// 取引所ごとに金額を取得し、配列に格納
$zaif     = $bitflyer = $coincheck = [];
$datetime = [];

foreach ($stmt as $key => $value) {
	$mod        = $value['id'] % 3;
	$price      = $value['price'];
	$created_at = $value['created_at'];

	switch ($mod) {
		case '0': // coincheck
			$coincheck[] = $price;
			$datetime[]  = substr($created_at, 0, - 1) . '0';
			break;

		case '1': // zaif
			$zaif[] = $price;
			break;

		case '2': // bitflyer
			$bitflyer[] = $price;
			break;

		default:
			break;
	}
}

/*
 * 配列を作成し、highchartsライブラリが読み取るJSONの形式に合わせて時間と金額を格納
 * [ [タイムスタンプ, 金額], [タイムスタンプ, 金額]... ]
 */
$array_zaif = $array_bitflyer = $array_coincheck = [];
$timestamp  = [];

for ($i = 0; $i < count($datetime); $i ++) {
	// HACK 桁数を揃えるPHPの関数がある
	$timestamp[]       = strtotime($datetime[$i]) . '000';
	$array_zaif[]      = [(int)$timestamp[$i], (int)$zaif[$i]];
	$array_bitflyer[]  = [(int)$timestamp[$i], (int)$bitflyer[$i]];
	$array_coincheck[] = [(int)$timestamp[$i], (int)$coincheck[$i]];
}

file_put_contents('json/zaif.json', json_encode($array_zaif));
file_put_contents('json/bitflyer.json', json_encode($array_bitflyer));
file_put_contents('json/coincheck.json', json_encode($array_coincheck));