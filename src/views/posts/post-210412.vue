<template>
  <div>
    <h2 id="javascriptのプライベートについて">
      JavaScriptのプライベートについて
    </h2>
    <p>
      まぁまぁ前の話ですが、初めて知ったことだったのでメモ程度に書き留めておきます。
    </p>
    <h3 id="プライベートとは">プライベートとは</h3>
    <p>
      プライベートはオブジェクト指向における関数や変数のアクセス性に関わるもので、このアクセス制限をすることでより安全性の高いプログラムにすることが目的です。
    </p>
    <p>この概念がしっかりとしている言語として、PHPやJavaなどがあります。</p>
    <h3 id="書き方">書き方</h3>
    <p>
      基本的には、クラス内の変数と関数のはじめに
      <strong>#</strong>
      を付けることでその変数/関数をプライベートとして扱うことが出来ます。ただ、Javaのように細かく分かれてはいないようです。
    </p>
    <p>
      注意すべき点としては、これが
      <strong>実験的な提案</strong>
      と書かれている点です。一部ブラウザや古いバージョンのNode.jsでは使えないため、注意が必要です。
    </p>
    <p>例は以下の通りです。</p>
    <pre v-highlightjs><code class="javascript">class Sample {
  #private = &#39;foo&#39;
  public = &#39;bar&#39;
}

let sample = new Sample()


// パブリックフィールドは普通にアクセスできる
console.log(sample.public)
/* &gt; bar */


// プライベートフィールドはクラス外からはアクセスできない
console.log(sample.#private)
/* 
console.log(sample.#private)
                  ^

SyntaxError: Private field &#39;#private&#39; must be declared in an enclosing class
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
</code></pre>
  </div>
</template>

<script>
export default {
  title: "javascriptのプライベートについて",
};
</script>