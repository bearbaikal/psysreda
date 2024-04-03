<template>
  <Wrapper>
    <div class="wobbler">
      <div class="top">
        <slot name="top" />
      </div>
      <div class="bottom">
        <slot name="bottom" />
      </div>
    </div>
  </Wrapper>
</template>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.wobbler {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: $standard-width;
  border: 2px dashed #dc7e89;
  border-radius: $border-radius;
}

.top,
.bottom {
  padding: $px-40;
  display: flex;
  justify-content: center;
  text-align: center;
}

.top {
  border-top-right-radius: $border-radius;
  border-top-left-radius: $border-radius;
}

.bottom {
  border-top: 2px dashed #ccc;
  border-bottom-right-radius: $border-radius;
  border-bottom-left-radius: $border-radius;
}
</style>
<script setup lang="ts">
import Wrapper from "@/components/Wrapper.vue";
</script>
