<template>
  <div class="education-view">
    <Wobbler>
      <template #bottom>
        <Layout1>
          <template #section1> Программы профессиональной переподготовки и повышения квалификации </template>
          <template #section2> c 2005 года </template>
          <template #section3>пройдено более 20 программ </template>
          <template #section4>Узнать подробнее...</template>
        </Layout1>
      </template>
      <template #top>
        <Layout1>
          <template #section1> Диплом <br />о высшем образовании </template>
          <template #section2> 2000 - 2005 </template>
          <template #section3>
            Психолог,<br />
            Преподаватель психологии.</template
          >
          <template #section4> Экономико-Правовой институт, г.Воронеж </template>
        </Layout1>
      </template>
    </Wobbler>
  </div>
</template>
<script lang="ts" setup>
import Layout1 from "@/components/Layout1.vue";
import Wobbler from "@/components/wobbler/Wobbler.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.education-view {
  padding-left: $px-20;
  padding-right: $px-20;

  &__title {
    text-align: center;
    margin-bottom: $px-40;
    color: #444;
    font-size: 2.25rem;
  }

  &__item-title {
    font-size: 1.25rem;
  }

  &__item-period {
    font-size: 1.5rem;
    margin-top: $px-15;
  }

  &__item-type {
    font-size: 1.125rem;
    margin-top: $px-15;
  }

  &__item-city {
    font-size: 1rem;
    margin-top: $px-15;
  }

  &__item-location {
    font-size: 1rem;
  }
}

:deep(.base-card__container) {
  margin-bottom: $px-40;
}

:deep(.base-card__body) {
  max-width: 500px;
  text-align: center;
  padding: $px-25 $px-15 0;
}
</style>
