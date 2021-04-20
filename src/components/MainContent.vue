<template>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {},
};
</script>

<style lang="scss">
@import "_base.scss";
@import "highlight/_vs.scss";

div.main-content {
  width: $mainContentWidth;
  padding: 0 15px;
  box-sizing: border-box;

  h1 {
    font-size: 30px;
  }

  h2 {
    border: {
      bottom: 4px solid $mainHeadingBorderColor;
      radius: 4px;
    }
  }

  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.9em;
    padding-left: 15px;
    border: {
      left: 4px solid $mainHeadingBorderColor;
      radius: 3px;
    }
  }

  ul {
    padding-left: 20px;
  }

  pre {
    padding: 10px;
    margin: 1rem;
    overflow-x: auto;
    border: 1px solid rgb(240, 230, 207);
    border-radius: 6px;

    code {
      font-size: 1rem;
      font-family: Consolas, Monaco, monospace;
    }
  }
}

@media only screen and (max-width: $flexibleWidth) {
  div.main-content {
    width: 100%;
    padding: 0 10px;

    h2 {
      padding-left: 0.2em;
    }

    p {
      padding-left: 0.3em;
    }

    pre {
      margin-left: 0.3em;
    }
  }
}

@media (prefers-color-scheme: dark) {
  @import "_darkBase.scss";
  @import "highlight/_vs2015.scss";

  div.main-content {
    h2 {
      border: {
        bottom: 4px solid $mainHeadingBorderColor;
      }
    }

    h3 {
      border-left: 4px solid $mainHeadingBorderColor;
    }

    pre {
      border: 1px solid rgb(85, 85, 85);
    }
  }
}
</style>