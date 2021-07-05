<template>
  <div>
    <h2 id="es2021とかで興味を持ったものとか">
      ES2021とかで興味を持ったものとか
    </h2>
    <p>記事を読んでておもしろかったため、紹介します。</p>
    <h3 id="数字の区切り">数字の区切り</h3>
    <p>
      数字をアンダースコア（_）で区切ることが出来ます。大きい数字を扱う時に見やすくなります。
    </p>
    <pre v-highlightjs><code class="language-javascript">let num = 123_456_789;

console.log(num);
// &gt; 123456789
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators"
          >数値の区切り文字 - MDN</a
        >
      </p>
    </blockquote>
    <h3 id="replaceall">replaceAll</h3>
    <p>
      既存のreplace関数では、はじめにマッチした文字列しか置換しませんでしたが、replaceAll関数はマッチしたすべての文字列を置換できます。
    </p>
    <pre
      v-highlightjs
    ><code class="language-javascript">let str = &#39;abc abc abc&#39;;

str.replace(&#39;abc&#39;, &#39;x&#39;); 
// &quot;x abc abc&quot;

str.replaceAll(&#39;abc&#39;, &#39;x&#39;);
// &quot;x x x&quot;
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"
          >String.prototype.replaceAll() - JavaScript | MDN</a
        >
      </p>
    </blockquote>
    <h3 id="様々な演算子「」、「」、「」">
      様々な演算子「??=」、「||=」、「&amp;&amp;=」
    </h3>
    <h4 id="null-合体代入-">Null 合体代入 (??=)</h4>
    <p>左辺がnullish（null または undefined）である場合にのみ代入します。</p>
    <pre v-highlightjs><code class="language-javascript">let obj = { num1: 10 };

obj.num1 ??= 99;
console.log(obj.num1);
// &gt; 10

obj.num2 ??= 500;
console.log(obj.num2);
// &gt; 500
</code></pre>
    <h4 id="論理和代入-">論理和代入 (||=)</h4>
    <p>
      左辺が<a href="https://developer.mozilla.org/ja/docs/Glossary/Falsy"
        >falsy</a
      >（Boolean
      コンテキストに現れたときに偽とみなされる値）である場合にのみ代入します。
    </p>
    <pre
      v-highlightjs
    ><code class="language-javascript">let obj = { num: 10, str: &#39;&#39; };

obj.num ||= 99;
console.log(obj.num);
// &gt; 10

obj.str ||= &#39;sample&#39;;
console.log(obj.str);
// &gt; sample
</code></pre>
    <h4 id="論理積代入-">論理積代入 (&amp;&amp;=)</h4>
    <p>
      左辺が<a href="https://developer.mozilla.org/ja/docs/Glossary/Truthy"
        >truthy</a
      >（Boolean
      コンテキストに現れたときに真とみなされる値）である場合にのみ代入します。
    </p>
    <pre v-highlightjs><code class="language-javascript">let a = true;
let b = false;

a &amp;&amp;= &#39;This is truthy&#39;;
console.log(a);
// &gt; This is truthy

b &amp;&amp;= &#39;This is truthy&#39;;
console.log(b);
// &gt; false
</code></pre>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment"
          >Null 合体代入 (??=) - JavaScript | MDN</a
        ><br /><a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment"
          >論理和代入 (||=) - JavaScript | MDN</a
        ><br /><a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment"
          >論理積代入 (&amp;&amp;=) - JavaScript | MDN</a
        >
      </p>
    </blockquote>
    <h3 id="参考">参考</h3>
    <blockquote>
      <p>
        <a href="https://zenn.dev/tonkotsuboy_com/articles/es2021-whats-new"
          >正式仕様リリース！
          JavaScriptの最新仕様ES2021で追加された新機能まとめ</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "ES2021とかで興味を持ったものとか",
};
</script>