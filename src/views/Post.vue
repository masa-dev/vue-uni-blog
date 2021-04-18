<template>
  <div class="post">
    <router-view />
  </div>
</template>

<style lang="scss">
pre {
  overflow-x: scroll;
  margin: 15px;
  padding: 10px;
  font-size: 1.1rem;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  border: 1px solid gray;
  border-radius: 6px;
}

@media only screen and (max-width: 950px) {
  pre {
    margin: 0;
  }
}
</style>