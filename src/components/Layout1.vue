<template>
  <div class="layout1">
    <div class="section1">
      <slot name="section1" />
    </div>
    <div class="section2">
      <slot name="section2" />
    </div>
    <div class="section3">
      <slot name="section3" />
    </div>
    <div class="section4">
      <slot name="section4" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.section1 {
  font-size: 1.675rem;
  line-height: 1.5em;
  color: $black-accent-1;
  margin-bottom: $px-30;
}

.section2 {
  font-size: 1.5rem;
  margin-top: $px-15;
}

.section3 {
  font-size: 1.125rem;
  margin-top: $px-15;
  font-weight: 500;
}

.section4 {
  font-size: 1rem;
  margin-top: $px-15;
}
</style>
<script setup lang="ts"></script>
