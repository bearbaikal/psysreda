<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<style lang="scss">
@import "@/scss/variables.scss";

.wrapper {
  display: flex;
  justify-content: center;
  padding-right: $px-20;
  padding-left: $px-20;
}
</style>
