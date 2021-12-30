<?php
// 下記のURLにアクセスを許可する
header('Access-Control-Allow-Origin: https://buturi.heteml.net');
header('Access-Control-Allow-Origin: https://masa-dev.github.io');
// 文字コード
header("Content-Type: application/json; charset=UTF-8");

// ディレクトリの数をカウントする
const FOLDER_PATH = "./";
$folder = glob(FOLDER_PATH . "*", GLOB_ONLYDIR);
$folderCount = count($folder);
$response["count"] = $folderCount;

echo json_encode($response, JSON_PRETTY_PRINT);
