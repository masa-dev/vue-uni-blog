<template>
  <div id="app">
    <ToggleTheme />
    <Header />
    <main>
      <MainContent />
      <SideContent />
    </main>
    <Footer />
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainContent from "@/components/MainContent.vue";
import SideContent from "@/components/SideContent.vue";

export default {
  name: "Home",
  components: {
    ToggleTheme,
    Header,
    MainContent,
    SideContent,
    Footer,
  },
};
</script>

<style lang="scss">
@import "components/_base.scss";
/* Noto Sans JP by Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

body {
  transition: 0.75s background-color, color;
  position: relative;
  width: $flexibleWidth;
  padding-top: 1px;
  margin: 0 auto;
  color: $defaultColor;
  /*background-color: rgb(15, 37, 64);*/
  background-color: $defaultBackgroundColor;
  font-family: "Yu Gothic Medium", YuGothic, "Noto Sans JP", sans-serif;
  font-weight: 500;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-left: 0.5em;
  }

  p {
    font-size: 1.05rem;
    padding-left: 1em;

    strong {
      color: rgb(240, 133, 11);
      white-space: nowrap;
    }
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
  width: $flexibleWidth;
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (min-width: $flexibleWidth) {
  html {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0);
      border: none;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(128, 128, 128, 0.6);
      border-radius: 5px;
      box-shadow: none;
    }
  }
}

@media only screen and (max-width: $flexibleWidth) {
  body {
    width: 100%;
    padding: 0;
    padding-top: 1px;
    margin: 0;

    p {
      padding-left: 0;
    }
  }

  main {
    width: 100%;
  }
}

// ダークテーマ（スイッチ切り替え用）
body.dark-theme {
  @import "components/_darkBase.scss";
  transition: 0s background-color;

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
</style>
