<?php
// 下記のURLにアクセスを許可する
header('Access-Control-Allow-Origin: https://buturi.heteml.net');
header('Access-Control-Allow-Origin: https://masa-dev.github.io');
header('Access-Control-Allow-Origin: http://localhost:8080');
// 文字コード
header("Content-Type: application/json; charset=UTF-8");

$num = $_GET["num"];
$path = "./" . $num . "/data.json";

if (is_numeric($num) && file_exists($path)) {
  // 漫画の情報ファイルを読み込む
  $comicData = file_get_contents($path);
  $comicData = mb_convert_encoding($comicData, "UTF-8", "auto");
  $comicObj = json_decode($comicData);

  $response["status"] = true;
  $response["title"] = $comicObj->{"title"};
  $response["type"] = $comicObj->{"type"};
} else {
  // statusをfalseにする
  if(!is_numeric($num)) {
    $msg = "入力された値が正しくありません";
  }
  else if(!file_exists($path)) {
    $msg = "ファイルが存在しません";
  }
  $response["msg"] = $msg;
  $response["status"] = false;
}

echo json_encode($response, JSON_PRETTY_PRINT);
