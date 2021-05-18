<template>
  <div>
    <h2 id="非同期処理とコールバック">非同期処理とコールバック</h2>
    <h3 id="非同期処理について">非同期処理について</h3>
    <p>
      JavaScriptの非同期処理の代表例として、setTimeout と setInterval
      があります。また、サーバーへデータを送受信するような時間のかかってしまう場合に非同期処理を用います。
    </p>
    <p>以下に非同期処理の簡単な例を紹介します。</p>
    <pre v-highlightjs><code class="language-javascript">function func() {
    console.log(&#39;func が実行されました。&#39;);
}


time_ms = 1000;
setTimeout(func, time_ms);
console.log(&#39;プログラムを終了します。&#39;);

// &gt; プログラムを終了します。
// &gt; func が実行されました。
</code></pre>
    <p>
      このコードでは、setTimeoutの方が先に実行されているにもかかわらず、その後の出力の後にsetTimeoutの処理が実行されています。
    </p>
    <p>
      このように、JavaScriptには同期処理と非同期処理が存在し、非同期関数を同期的に使ってしまうと思わぬエラーを招いてしまいます。
    </p>
    <h3 id="コールバック">コールバック</h3>
    <p>
      非同期処理は便利ですが、非同期と同期を混合することを避ける必要があるため、そのままでは少し使いにくい仕組みです。
    </p>
    <p>そのため、非同期処理を同期的に実行させる方法がいくつかあります。</p>
    <ul>
      <li>コールバック</li>
      <li>Promise</li>
      <li>async / await</li>
    </ul>
    <p>今回はコールバックについて説明します。</p>
    <p>コールバックの書き方は以下の通りです。</p>
    <pre
      v-highlightjs
    ><code class="language-javascript">function introduce(name) {
    alert(`私の名前は${name}です。`);
}

function inputMyName(callback /* 次に実行させる関数 */) {
    let name = prompt(&#39;名前を入力してください。&#39;);
    callback(name);
}

inputMyName(introduce);
</code></pre>
    <p>
      inputMyName が実行された後、コールバックによって introduce
      が呼ばれています。
    </p>
    <p>
      このコールバックを用いることで非同期関数を実行した後に別の関数や処理を実行させることが出来、非同期処理を同期的に書くことが出来ます。
    </p>
    <p>
      しかし、コールバックを繋げすぎると見栄えが悪く、見にくいコードになってしまいます。これはコールバック地獄といわれています。以下がその例です（Node.js）。
    </p>
    <pre
      v-highlightjs
    ><code class="language-javascript">const fs = require(&#39;fs&#39;);

fs.readFile(&#39;data1.txt&#39;, function(data1) {
    fs.readFile(&#39;data2.txt&#39;, function(data2) {
        fs.readFile(&#39;data3.txt&#39;, function(data3) {
            fs.readFile(&#39;data4.txt&#39;, function(data4) {
                fs.readFile(&#39;data5.txt&#39;, function(data5) {
                    console.log(data1 + data2 + data3 + data4 + data5);
                })
            })
        })
    })
})
</code></pre>
    <blockquote>
      <p>参照</p>
      <p>
        <a href="https://qiita.com/umeko2015/items/2fdb2785eac8f4117f23"
          >コールバック地獄からの脱出 - Qiita</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "非同期処理とコールバック",
};
</script>