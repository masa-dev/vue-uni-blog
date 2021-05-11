<template>
  <div>
    <h2 id="javascriptで使われる構文など">JavaScriptで使われる構文など</h2>
    <h3 id="条件-三項-演算子">条件 (三項) 演算子</h3>
    <p>
      一見意味不明な文字列に見えますが、JavaScriptに限らず、様々な言語でサポートされている構文です。
    </p>
    <p>
      簡単なif文を省略する目的で使ったりしますが、直感的に分かりにくい構文であるため、多用すると処理が分かりにくくなります。
    </p>
    <pre
      v-highlightjs
    ><code class="language-javascript">// a と b の最大値を求める処理
let a = 1, b = 2;
if (a &gt; b) {
    max = a;
} else {
    max = b;
}


// 上記の処理を条件演算子で書いた場合の処理
let a = 1, b = 2;
let max = a &gt; b ? a : b;
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >条件 (三項) 演算子 - JavaScript | MDN</a
        >
      </p>
    </blockquote>
    <h3 id="スプレッド構文">スプレッド構文</h3>
    <p>ピリオドを3つ連ねることで表現します。</p>
    <p>基本的には配列を個々の要素に展開することができる構文です。</p>
    <pre
      v-highlightjs
    ><code class="language-javascript">function sum (x, y, z) {
    return x + y + z;
}

let arr = [1, 2, 3];
console.log(sum(...arr));
// &gt; 6
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
          >スプレッド構文 - JavaScript | MDN
        </a>
      </p>
    </blockquote>
    <h3 id="for-of">for of</h3>
    <p>スプレッド構文を紹介したついでに紹介します。</p>
    <p>for of 文は、配列を展開して配列の要素数繰り返します。</p>
    <pre v-highlightjs><code class="language-javascript">let arr = [1, 2, 3];
for (let num of arr) {
    console.log(num);
}
/*
&gt; 1
&gt; 2
&gt; 3
*/
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of"
          >グローバル Web アイコンfor...of - JavaScript | MDN</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "JavaScriptで使われる構文など",
};
</script>