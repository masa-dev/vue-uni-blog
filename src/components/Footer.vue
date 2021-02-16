<template>
  <footer>
    <hr />
    <p>
      <small>{{ msg }}</small>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
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
  }
}
</style>