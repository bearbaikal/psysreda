<template>
  <div class="education-view">
    <BaseCard class="welcome-card">
      <template #body>
        <Layout1>
          <template #section1> Программы профессиональной подготовки</template>
          <template #section2> с 2005 года - сегодня </template>
          <template #section3>
            <div style="margin-top: 40px; margin-bottom: 40px">Я прошла более 20 образовательных программ</div>
          </template>
          <template #section4>
            <TextLink :text="lang.textLink.knowMore" @click="knowMoreAboutCourses" />
          </template>
        </Layout1>
      </template>
    </BaseCard>

    <BaseCard class="welcome-card">
      <template #body>
        <Layout1>
          <template #section1> Диплом <br />о высшем образовании </template>
          <template #section2> 2000 - 2005 </template>
          <template #section3>
            <div style="font-size: 1.125em">
              Психолог,<br />
              Преподаватель психологии.<br />
            </div>
            <div style="margin-top: 30px; margin-bottom: 30px; font-size: 0.9em">
              Экономико-Правовой институт, г.Воронеж
            </div>
          </template>
          <template #section4>
            <TextLink :text="lang.textLink.knowMore" @click="knowMoreAboutDiploma" />
          </template>
        </Layout1>
      </template>
    </BaseCard>
  </div>
</template>
<script lang="ts" setup>
import BaseCard from "@/components/BaseCard.vue";
import Layout1 from "@/components/Layout1.vue";
import TextLink from "@/components/links/TextLink.vue";
import { lang } from "@/settings/lang";

const knowMoreAboutDiploma = () => {
  console.log("knowMoreAboutDiploma");
};

const knowMoreAboutCourses = () => {
  console.log("knowMoreAboutCourses");
};
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
