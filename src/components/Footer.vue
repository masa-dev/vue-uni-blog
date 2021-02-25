<template>
  <footer>
    <hr />
    <p v-html="footerMsg()"></p>
  </footer>
</template>

<script>
const siteConfig = require("../../config");

export default {
  name: "Footer",
  props: {},
  methods: {
    footerMsg() {
      return siteConfig.footerMsg.replace(/\n/g, "<br>");
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  footer {
    hr {
      height: 1px;
      background-color: rgb(129, 129, 129);
      border: none;
    }
    p {
      font-size: 0.85rem;
    }
  }
}
</style>