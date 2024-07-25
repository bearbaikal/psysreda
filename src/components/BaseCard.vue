<template>
  <div class="base-card" :style="{ maxWidth, minHeight }">
    <div
      class="base-card__container"
      :class="{ 'base-card__container--flat-top': flatTop, 'base-card__container--flat-bottom': flatBottom }"
    >
      <div class="base-card__header" v-if="$slots.header">
        <slot name="header" />
      </div>
      <div class="base-card__body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: String,
  minHeight: String,
  flatTop: Boolean,
  flatBottom: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.base-card {
  display: flex;
  justify-content: center;
  padding-right: $px-20;
  padding-left: $px-20;

  &__container {
    width: $standard-width;
    border: $border-style;
    border-radius: $border-radius;
  }

  &__container--flat-top {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  &__container--flat-bottom {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &__header {
    display: block !important;
    font-size: 23px !important;
    color: #444 !important;
    line-height: 33px !important;
    text-align: center !important;
    margin-top: $px-20;
    margin-bottom: $px-20;
  }

  &__body {
    margin-bottom: $px-30;
    padding-right: $px-20;
    padding-left: $px-20;
  }
}
</style>
