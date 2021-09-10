<template>
  <div class="404">
    <h2>404 - Not Found</h2>
    <p>お探しのページは見つかりませんでした。</p>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  title: "404 Not Found",
  data() {
    return {
      url: `${location.origin}/#${this.$router.history.current.fullPath}`,
    };
  },
};
</script>
