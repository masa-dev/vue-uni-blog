<template>
  <body>
    <div id="app">
      <Header />
      <div id="nav">
        <!--
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/post">Post</router-link>
        -->
      </div>
      <main>
        <MainContent />
        <SideContent />
      </main>
      <Footer :msg="getFooterMsg()" />
    </div>
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainContent from "@/components/MainContent.vue";
import SideContent from "@/components/SideContent.vue";
const siteConfig = require('../config');

export default {
  name: "Home",
  components: {
    Header,
    MainContent,
    SideContent,
    Footer,
  },
  methods: {
    getFooterMsg: function(){
      return siteConfig.footerMsg
    }
  }
};
</script>

<style lang="scss">
@import "components/_base.scss";

body {
  width: 900px;
  margin: 0 auto;
  color: $defaultColor;
  /*background-color: rgb(15, 37, 64);*/
  background-color: $defaultBackgroundColor;
  font-family: "Yu Gothic", YuGothic, sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-left: 0.5em;
  }

  p {
    font-size: 1.05em;
    padding-left: 1em;
  }

  a {
    color: $defaultAnkerColor;
    transition: color 0.1s;
    &:visited {
      color: $defaultAnkerColor;
    }
    &:hover {
      color: orangered;
    }
  }
}

main {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-width: $flexibleWidth) {
  body {
    width: 100%;
    padding: 0;
    margin: 0;

    p {
      padding-left: 0;
    }
  }

  main {
    width: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  @import "components/_darkBase.scss";

  body {
    color: $defaultColor;
    background-color: $defaultBackgroundColor;

    a {
      color: $defaultAnkerColor;

      &:visited {
        color: $defaultAnkerColor;
      }

      &:hover {
        color: rgb(255, 115, 0);
      }
    }
  }
}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
