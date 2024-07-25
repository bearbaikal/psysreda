<template>
  <div class="home-view">
    <div class="home-view__cards">
      <WelcomeCard />
    </div>
  </div>
</template>
<script lang="ts" setup>
// TODO
import WelcomeCard from "@/components/cards/WelcomeCard.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.home-view {
  &__header {
    text-align: center;
    margin-bottom: 25px;
    color: #444;
    font-size: 2.25rem;
  }

  &__title-line-primary {
    color: $black-accent-1;
    font-size: 1.25rem;
  }

  &__exclamation-mark {
    padding-left: 3px;
  }

  &__title-line-secondary {
    color: $black-accent-1;
  }
}
</style>
