<template>
  <div>
    <h2>記事</h2>
    <p>必要があれば，ここに記録などをしていこうと考えています．</p>
    <ul>
      <li><router-link to="/post/post-210511">JavaScriptで使われる構文など</router-link></li>
      <li><router-link to="/post/post-210426">クロージャ</router-link></li>
      <li><router-link to="/post/post-210412">javascriptのプライベートについて</router-link></li>
      <li><router-link to="/post/post-210305">サイトの構成</router-link></li>
      <li><router-link to="/post/test">test</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  title: "Post",
};
</script>