<?php
// 下記のURLにアクセスを許可する
//header('Access-Control-Allow-Origin: https://masa-dev.github.io');
header('Access-Control-Allow-Origin: *');
// 文字コード
header("Content-Type: application/json; charset=UTF-8");

$comicId = $_GET["comic"];
$path = "./" . $comicId;

if (is_numeric($comicId) && file_exists($path)) {
  // 漫画の情報ファイルを読み込む
  $files = glob($path . "/*.png");
  $count = 0;

  if ($files != false) {
    $count = count($files);
  }

  $pageCount = ($count - 1) / 2;

  if (is_int($pageCount)) {
    $response["status"] = true;
    $response["count"] = $pageCount;
  } else {
    $response["status"] = false;
    $response["msg"] = "エラーが発生しました。";
  }
} else {
  // statusをfalseにする
  if (!is_numeric($comicId)) {
    $msg = "入力された値が正しくありません";
  } elseif (!file_exists($path)) {
    $msg = "ファイルが存在しません";
  }
  $response["msg"] = $msg;
  $response["status"] = false;
}

echo json_encode($response, JSON_PRETTY_PRINT);
