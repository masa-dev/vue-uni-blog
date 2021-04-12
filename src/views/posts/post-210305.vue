<template>
  <div>
    <h2 id="サイトの構成">サイトの構成</h2>
    <h3 id="経緯とか">経緯とか</h3>
    <p>今までは、それぞれのページのHTMLを書いていましたが、これからはVue.jsを用いてビルド出力することにしました。</p>
    <p>理由としては、HTMLをそれぞれのページごとに用意すると、仕様変更の手間が大きいためです。例えば、フッターのテキストを変更したい場合に、すべてのHTMLのフッターを書き換えるのはかなりの手間です。</p>
    <p>そのため、Vue.jsのように各タグや要素などをテンプレートとして扱うイメージのパッケージを選択しました。このメリットは、Vue.jsがそれぞれのテンプレートを組み合わせてHTMLファイルを構成するため、変更部分が少なくなり、楽になります。</p>
    <h3 id="このサイトについて">このサイトについて</h3>
    <p>このサイトの場合だと、ローカル環境でビルドして出力フォルダ（distフォルダ）をそのままFTPサイトにアップロードしています。</p>
    <p>実際のコードはGithubで公開しています。</p>
    <blockquote>
      <p><a href="https://github.com/masa-dev/vue-uni-blog">https://github.com/masa-dev/vue-uni-blog</a></p>
    </blockquote>
  </div>
</template>

<script>
export default {
  title: "サイトの構成",
};
</script>