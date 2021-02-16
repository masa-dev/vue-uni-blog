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
</style>