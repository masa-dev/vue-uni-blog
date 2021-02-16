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

div.main-content {
  width: 700px;
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
    padding-left: 15px;
    border-left: 4px solid $mainHeadingBorderColor;
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
  }
}

@media (prefers-color-scheme: dark) {
  @import '_darkBase.scss';
  
  div.main-content {
    h2 {
      border: {
        bottom: 4px solid $mainHeadingBorderColor;
      }
    }

    h3 {
      border-left: 4px solid $mainHeadingBorderColor;
    }
  }
}
</style>