<?php
$data_url = "data/BBS.json";
$json_data = file_get_contents($data_url);
$data = json_decode($json_data, true);
$page_index = !empty($_GET["page"]) ? $_GET["page"] : 1;

// 入力なしまたは数字出ない場合は1を代入する
if ($page_index == null || !is_numeric($page_index)) {
  $page_index = 1;
}

// データが格納されていないとき，配列で初期化する
if ($data == null) {
  $data = [];
}

if (!empty($_POST["myMessage"])) {
  date_default_timezone_set("Asia/Tokyo");
  $timestamp = time();

  $my_name = html_sanitize($_POST["myName"]);
  $my_message = nl2br(html_sanitize($_POST["myMessage"])); // 改行をする
  $time_str = date("Y年 n月j日 G:i", $timestamp);
  $time_num = $timestamp;

  //名前が入力されていないとき
  if ($_POST["myName"] == "") {
    $my_name = "名無しさん";
  }

  $post = array("name" => $my_name, "message" => $my_message, "time_num" => $time_num, "time_str" => $time_str);
  array_push($data, $post);

  $fp = fopen($data_url, "w"); // 書き込みのみの上書き
  flock($fp, LOCK_EX);
  fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
  flock($fp, LOCK_UN);
  fclose($fp);
}

function html_sanitize($str)
{
  return htmlspecialchars($str, ENT_QUOTES, "UTF-8");
}

// 再読込時の再submit防止用の処理
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  header("Location: ./");
  exit;
} ?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>掲示板</title>
  <link rel="stylesheet" href="scss/style.css">
</head>

<body>
  <header>
    <h1>掲示板</h1>
  </header>
  <main>
    <div id="post-form-area">
      <h2>投稿フォーム</h2>
      <form action="./" method="post">
        <div class="form-group">
          <label for="myName">名前</label>
          <input id="myName" type="text" name="myName" maxlength="20" placeholder="名前">
        </div>
        <div class="form-group">
          <label for="myMessage">メッセージ</label>
          <textarea id="myMessage" type="text" name="myMessage" maxlength="300" placeholder="内容"></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
    <div id="posts-list-area">
      <h2>投稿内容</h2>
      <ul>
        <?php
        $data_len = count($data);
        $data_index = $data_len - ($page_index - 1) * 10 - 1;
        for ($i = $data_index; $i >= $data_index - 10 + 1 && $i >= 0; $i--) : ?>
          <li>
            <div class="list-header">
              <p class="list-user-name">
                <img src="img/user-image.png">
                <?php echo $data[$i]["name"]; ?>
              </p>
              <span class="list-user-time">
                <?php echo $data[$i]["time_str"]; ?>
              </span>
            </div>
            <div class="list-content">
              <p class="list-user-message">
                <?php echo $data[$i]["message"]; ?>
              </p>
            </div>
          </li>
        <?php endfor; ?>
      </ul>
      <div class="page-index">
        <?php
        if (1 < $page_index) {
          echo ('<a href="./?page=' . ($page_index - 1) . '">&lt;</a>');
        } else {
          echo '&nbsp;&nbsp;';
        }

        echo '&nbsp;' . $page_index . '&nbsp;';

        if (count($data) > 10 * $page_index) {
          echo ('<a href="./?page=' . ($page_index + 1) . '">&gt;</a>');
        } else {
          echo '&nbsp;&nbsp;';
        }
        ?>
      </div>
    </div>
  </main>
  <footer>
    <hr>
    <p><small>2021年 卒研ゼミ課題</small></p>
  </footer>
</body>

</html>