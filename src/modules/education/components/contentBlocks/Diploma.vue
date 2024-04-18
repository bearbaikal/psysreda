<template>
  <div class="diploma">
    <div>
      Диплом по специальности:<br />
      <div class="diploma__secondary">Психолог. Преподаватель психологии.</div>
    </div>
    <div class="diploma__dot">*</div>
    <div>
      Период обучения:
      <div class="diploma__secondary">2000 - 2005 годы</div>
    </div>
    <div class="diploma__dot">*</div>
    <div>
      Место обучения:
      <div class="diploma__secondary">Экономико-Правовой институт, г.Воронеж</div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.diploma {
  font-size: 1.125rem;
  line-height: 1.25em;

  &__dot {
    margin: $px-10 auto;
    font-size: 1.5rem;
    color: #666;
  }

  &__secondary {
    margin-top: $px-7;
    font-size: 1.5rem;
  }
}
</style>
