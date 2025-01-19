<template>
  <div class="education-view">
    <BaseCard class="welcome-card">
      <template #body>
        <Layout1>
          <template #section1> Программы профессиональной подготовки</template>
          <template #section2> с 2005 года - настоящее </template>
          <template #section3>
            <div style="margin-top: 30px" />
          </template>
          <template #section4>
            <TextLink :text="lang.textLink.knowMore" @click="handleClickKnowMore('educationPrograms')" />
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
            <TextLink :text="lang.textLink.knowMore" @click="handleClickKnowMore('diploma')" />
          </template>
        </Layout1>
      </template>
    </BaseCard>
  </div>
  <BaseDialog ref="baseDialogRef" @click:close="handleClickCloseDialog">
    <template #header>
      {{ dialog?.title }}
    </template>
    <template #body>
      <div class="education-view__dialog-body">
        <component :is="dialog?.component" />
      </div>
    </template>
    <template #buttons>
      <BaseButton :text="lang.button.close" color-scheme="whiteAndBlack" @click="handleClickCloseDialog" />
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { Component, Ref } from "vue";

import BaseButton from "@/components/base/BaseButton.vue";
import BaseDialog from "@/components/base/BaseDialog.vue";
import BaseCard from "@/components/BaseCard.vue";
import Layout1 from "@/components/Layout1.vue";
import TextLink from "@/components/links/TextLink.vue";
import Diploma from "@/modules/education/components/Diploma.vue";
import EducationPrograms from "@/modules/education/components/EducationPrograms.vue";
import { lang } from "@/settings/lang";

interface EducationDialog {
  title: string;
  component: Component; // Vue component.
}

type DialogName = "educationPrograms" | "diploma";

const dialogs: Record<DialogName, EducationDialog> = {
  educationPrograms: {
    title: "Образовательные программы",
    component: EducationPrograms,
  },
  diploma: {
    title: "Диплом о высшем образовании",
    component: Diploma,
  },
};

const baseDialogRef = ref<InstanceType<typeof BaseDialog>>();
const dialog: Ref<EducationDialog | null> = ref(null);

const handleClickKnowMore = (dialogName: DialogName) => {
  if (baseDialogRef.value) {
    dialog.value = dialogs[dialogName];
    baseDialogRef.value.open();
  }
};

const handleClickCloseDialog = () => {
  baseDialogRef.value?.close();
  dialog.value = null;
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables";

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

  &__dialog-body {
    max-height: 60vh; // TODO Change 100px to header height.
    overflow-y: auto;
    padding-bottom: 30px;
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
