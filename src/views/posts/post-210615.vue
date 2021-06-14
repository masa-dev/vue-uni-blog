<template>
  <div>
    <h2 id="分割代入">分割代入</h2>
    <p>
      いまだにPromiseについて完全に理解していないので、今回は自分が知っていることについて紹介します。意外と知らないこともあったのでそこも含めて説明できるように頑張ります。
    </p>
    <h3 id="分割代入について">分割代入について</h3>
    <p>
      分割代入は、ES6で実装された機能のことで、配列またはオブジェクトのプロパティから値を取り出して別の変数に代入する式のことです。
    </p>
    <pre v-highlightjs><code class="language-javascript">let rest; // 余り
let a, b;
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20


// 余った要素をスプレッド構文で rest に代入する
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // Array(3) [ 30, 40, 50 ]
</code></pre>
    <p>
      オブジェクトの場合は書き方が異なり、{}で囲います。
      また、宣言以外のオブジェクトの代入は、全体を()でさらに囲います。
    </p>
    <pre v-highlightjs><code class="language-javascript">let a, b;

// 宣言以外のオブジェクトの代入は、()で囲う
({a, b} = {a: 10, b:20});
console.log(a, b); //10, 20
</code></pre>
    <h3 id="使い道">使い道</h3>
    <p>使い道をいくつか説明します。</p>
    <h4 id="入れ替え">入れ替え</h4>
    <p>変数の入れ替えをする時によく用います。</p>
    <p>
      分割代入を使えば一時変数を用いずに記述できるためとても見やすくなります。
    </p>
    <pre v-highlightjs><code class="language-javascript">let a = 10;
let b = 20;

// 普通の入れ替え
let temp;
temp = a;
a = b;
b = temp;

console.log(a, b); // 20 10


// 分割代入を用いた入れ替え
[a, b] = [b, a];

console.log(a, b); // 10 20
</code></pre>
    <h4 id="複数の戻り値">複数の戻り値</h4>
    <p>分割代入を使うことで複数の戻り値を出力することが出来ます。</p>
    <p>関数で複数の戻り値を扱いたいときに使えます。</p>
    <pre
      v-highlightjs
    ><code class="language-javascript">function returnArrayFunc() {
  return [10, 20];
}

let a, b;
[a, b] = returnArrayFunc();

console.log(a, b); // 10 20
</code></pre>
    <h3 id="注意点">注意点</h3>
    <ul>
      <li>
        変数宣言とオブジェクトの分割代入を別に行う場合は、分割代入の式全体を()で囲ってないとエラーになる
      </li>
      <li>
        分割代入の前に入る文がブロックでない場合に、文末にセミコロンが無いとエラーになる
      </li>
    </ul>
    <h3 id="おわり">おわり</h3>
    <p>
      NodeJSでもモジュールから変数や関数をインポートする際にも使われるので、覚えておいて損はないと思います。
    </p>
    <h3 id="参考">参考</h3>
    <blockquote>
      <p>
        <a
          href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
          >分割代入 - JavaScript | MDN</a
        ><br />
        <a href="https://chaika.hatenablog.com/entry/2018/10/12/090000"
          >JavaScript (ES2015)
          分割代入でセミコロンがないとエラーになるトラップにはまる。 -
          かもメモ</a
        >
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "分割代入",
};
</script>