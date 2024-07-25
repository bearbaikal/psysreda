<template>
  <div class="app">
    <div class="app__tabs-bar-container">
      <TabsBar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TabsBar from "@/components/tabs/TabsBar.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.app {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: $px-40;

  &__tabs-bar-container {
    display: flex;
    justify-content: center;
    padding-right: $px-20;
    padding-left: $px-20;
  }
}

.container {
  max-width: $container-max-width;
}
</style>
