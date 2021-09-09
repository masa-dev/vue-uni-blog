<template>
  <footer>
    <hr />
    <p>
      <span v-html="footerMsg()"></span><br />
      {{ date }}
    </p>
  </footer>
</template>

<script>
const siteConfig = require("../../config");
const date = new Date();

export default {
  name: "Footer",
  props: {},
  data() {
    return {
      date: null,
    };
  },
  methods: {
    footerMsg() {
      return siteConfig.footerMsg.replace(/\n/g, "<br>");
    },
    getDate() {
      let str = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;

      if (this.date != str) {
        this.date = str;
      }
    },
  },
  mounted() {
    this.getDate();
    setInterval(() => this.getDate(), 1000);
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
