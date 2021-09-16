<template>
  <div class="toggle-switch-wrapper">
    <div class="mt-normal-navi">
      <input id="1" type="checkbox" />
      <label for="1"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleTheme",
  props: {},
};
</script>

<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/gh/JNKKKK/MoreToggles.css@0.2.1/output/moretoggles.min.css");

.toggle-switch-wrapper {
  position: absolute;
  top: 20px;
  right: 20px;

  .mt-normal-navi {
    font-size: 8px;
  }
}
</style>
