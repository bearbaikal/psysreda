<template>
  <div class="result-component">
    <div class="result-component__title">
      {{ lang.quiz.yourResult }}:
      <div class="result-component__result">{{ result }}</div>
    </div>
    <div class="result-component__result-stands-for">
      {{ lang.quiz.resultStandsForTitle }}
    </div>
    <div class="result-component__text">
      <TextParser :lines="lang.quiz.resultStandsFor" end-line-text="<br/><br/>" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import TextParser from "@/components/TextParser.vue";
import { lang } from "@/settings/lang";

defineProps({
  result: { type: Number, required: true },
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables";
.result-component {
  &__title {
    font-size: 1.5rem;
  }

  &__result {
    font-size: 2rem;
    margin-top: $px-10;
  }

  &__result-stands-for {
    margin-top: $px-30;
    font-size: 1.125rem;
    text-align: left;
  }

  &__text {
    margin-top: $px-10;
    text-align: left;
  }
}
</style>
