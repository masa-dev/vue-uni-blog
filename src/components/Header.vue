<template>
  <header>
    <h1><router-link to="/">戸田の卒研サイト</router-link></h1>
    <nav id="nav">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">プロフィール</router-link></li>
        <li><router-link to="/post">記事</router-link></li>
        <li><router-link to="/products">成果物</router-link></li>
        <li><a href="../">研究室</a></li>
        <li>
          <a href="https://webftp.heteml.jp/" target="_blank" rel="noopener"
            >heteml<img src="../assets/external-link-img.svg"
          /></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "_base.scss";

header {
  h1 {
    a {
      color: $defaultColor !important;
      text-decoration: none;
    }
    text-align: center;
    font-weight: normal;
    padding-left: 0;
  }

  nav {
    ul {
      padding: {
        left: 10px;
        right: 10px;
      }

      margin: 0;
      border-bottom: 1px solid rgb(187, 187, 187);
      text-align: center;

      li {
        box-sizing: border-box;
        font-size: 1.3rem;
        display: inline;
        padding: 0px;
        transition: border-bottom 0.3s;
      }
    }

    a {
      color: $defaultColor;
      padding: 0 10px 0px;
      border-bottom: 4px solid rgba(0, 0, 0, 0);
      /*下線を消す*/
      text-decoration: none;
      transition: color 0.3s;
      transition: border-bottom 0.3s;
      box-sizing: border-box;

      &.router-link-exact-active {
        border-bottom: 4px solid $activeBorder;
      }
      &:hover {
        color: $defaultAnkerColor !important;
        border-bottom: 4px solid $activeBorder;
      }
      &:visited {
        color: $defaultColor;
      }

      > img {
        height: 1em;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  @import "_darkBase.scss";

  header {
    h1 {
      a {
        color: $defaultColor !important;
      }
    }
    nav {
      ul {
        border-bottom: 1px solid rgb(129, 129, 129);
      }

      a {
        color: $defaultColor;

        &.router-link-exact-active {
          border-bottom: 4px solid $activeBorder;
        }

        &:hover {
          color: $defaultAnkerColor !important;
          border-bottom: 4px solid $activeBorder;
        }

        &:visited {
          color: $defaultColor;
        }
      }
    }
  }
}
</style>
