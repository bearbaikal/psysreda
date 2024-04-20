<template>
  <div class="education-programs">
    <div v-for="(item, index) in educationPrograms" :key="item.type + item.title">
      <div class="education-programs__type">{{ item.type }}</div>
      <div class="education-programs__dot">*</div>
      <div class="education-programs__title">{{ item.title }}</div>
      <div class="education-programs__dot">*</div>
      <div class="education-programs__period">{{ item.period }}</div>
      <div class="education-programs__dot">*</div>
      <div class="education-programs__location">{{ item.location }}</div>
      <div v-if="index < educationPrograms.length - 1" class="education-programs__line">
        * * * * * * * * * * * * * *
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { educationPrograms } from "@/modules/education/settings/educationHistory";
</script>
<style lang="scss" scoped>
@import "@/scss/variables";

.education-programs {
  &__type {
    font-size: 1.25rem;
    margin-bottom: $px-10;
    font-weight: bold;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: $px-10;
  }

  &__period {
    font-size: 1.125rem;
    margin-bottom: $px-10;
  }

  &__location {
    font-size: 1rem;
    font-weight: bold;
  }

  &__dot {
    margin: 0 auto;
    font-size: 1rem;
    color: #666;
  }

  &__line {
    margin: $px-30 auto;
    //border-bottom: 1px dashed hotpink;
    color: #333;
    width: 100%;
  }
}
</style>
