<template>
  <div>
    <h2 id="urlでgoogleカレンダーに登録する">
      URLでGoogleカレンダーに登録する
    </h2>
    <p>URLを入力するだけで簡単にGoogleカレンダーに登録できます。</p>
    <p>リマインドとかに使えるかな、と思ったので共有します。</p>
    <h3 id="やり方">やり方</h3>
    <p>ベースのURLにURLパラメータを入力すれば出来ます。</p>
    <pre v-highlightjs><code class="language-shell"># ベースのURL
https://www.google.com/calendar/event?action=TEMPLATE
</code></pre>
    <p>入力できるパラメータは以下の通りです。</p>
    <table>
      <thead>
        <tr>
          <th align="left">パラメータ</th>
          <th align="left">入力値</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">text</td>
          <td align="left">タイトル</td>
        </tr>
        <tr>
          <td align="left">location</td>
          <td align="left">場所</td>
        </tr>
        <tr>
          <td align="left">details</td>
          <td align="left">説明</td>
        </tr>
        <tr>
          <td align="left">dates</td>
          <td align="left">開始時間と終了時間</td>
        </tr>
        <tr>
          <td align="left">add</td>
          <td align="left">招待するメールアドレス</td>
        </tr>
      </tbody>
    </table>
    <pre v-highlightjs><code class="language-shell"># 例
https://www.google.com/calendar/event?action=TEMPLATE&amp;text=ダミーミーティング&amp;dates=20210801T130000/20210801T140000&amp;location=〒739-2116 広島県東広島市高屋うめの辺１−１

# 日時指定の方法
時間を指定して/で開始時間と終了時間を区切ります。

  2021年08月01日13時00分00秒
      ↓
  2021＿08＿01T 13＿00＿00
      ↓
  20210801T130000
</code></pre>
    <h3 id="参考">参考</h3>
    <blockquote>
      <p>
        <a href="https://qiita.com/_am_/items/30a09a23bfa3be0dc135"
          >googleカレンダーにURLで簡単に登録</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "URLでGoogleカレンダーに登録する",
};
</script>