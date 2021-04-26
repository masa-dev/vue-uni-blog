<template>
  <div>
    <h2 id="クロージャ">クロージャ</h2>
    <p>今回はクロージャについての話です。</p>
    <h3 id="クロージャとは">クロージャとは</h3>
    <p>MDNでは以下の様に説明されています。</p>
    <blockquote>
      <p>
        クロージャは、組み合わされた（囲まれた）関数と、その周囲の状態（レキシカル環境）への参照の組み合わせです。言い換えれば、クロージャは内側の関数から外側の関数スコープへのアクセスを提供します。JavaScript
        では、関数が作成されるたびにクロージャが作成されます。
      </p>
    </blockquote>
    <p>簡単に言うと、関数を出力する関数のようなイメージです。</p>
    <h3 id="具体例">具体例</h3>
    <pre v-highlightjs><code class="language-javascript">function makeFunc() {
  let str = &#39;Sample&#39;;
  return function() {
    alert(str);
  }
}

let func = makeFunc();
func();
</code></pre>
    <p>
      このコードを実行すると、変数strの文字列が出力されます。makeFuncは関数内の変数strを出力する関数を返します。
    </p>
    <h3 id="クロージャを使うメリット">クロージャを使うメリット</h3>
    <p>
      クロージャを用いるメリットは、主に変数を関数内でプライベート化することでグローバル変数を減らすことです。
    </p>
    <p>
      以下のように、グローバルで定義していた変数を関数内でカプセル化することで、コード内のグローバル変数を減らすことが出来ます。
    </p>
    <pre v-highlightjs><code class="language-javascript">// 変更前のコード
let num = 1;

function count() {
  return num++
}

console.log(count()); // 1
console.log(count()); // 2
</code></pre>
    <pre v-highlightjs><code class="language-javascript">// 変更後のコード
function makeCounter() {
  let num = 1;
  return function() {
    return num++;
  }
}

let count = makeCounter();
console.log(count()); // 1
console.log(count()); // 2
</code></pre>
    <p>
      上記のコードは両方ともグローバル変数の数としては同じですが、不要な変数をプライベート化して無くすことが出来ています。
    </p>
    <p>
      さらに工夫すると複数の関数を定義したり、プライベートメソッドのようなことも実装出来たりします。
    </p>
    <h3 id="参考">参考</h3>
    <blockquote>
      <p>
        <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures"
          >クロージャ - JavaScript | MDN</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "クロージャ",
};
</script>