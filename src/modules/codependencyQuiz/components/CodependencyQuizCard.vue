<template>
  <BaseCard>
    <template #header>
      Нужна ли мне работа<br />
      с созависимостью?
    </template>
    <template #body>
      <div class="codependency-quiz-card__body">
        <div>
          Этот <b>легкий</b> бесплатный <b>тест</b><br />
          поможет тебе определить<br />
          степень созависимости
        </div>
        <BaseButton
          :text="testResult ? lang.button.passAgain : lang.button.passTest"
          :color-scheme="testResult ? 'lightGrey' : 'red'"
          class="codependency-quiz-card__button"
          @click="openTestDialog"
        />
      </div>
    </template>
  </BaseCard>
  <CodependencyQuizDialog ref="testDialogRef" @click:close="handleCloseTestDialog" @test:finish="handleFinishTest" />
</template>
<script lang="ts" setup>
import { format } from "date-fns";
import { onBeforeMount, ref } from "vue";

import { Notify } from "@/classes/Notify";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import CodependencyQuizDialog from "@/modules/codependencyQuiz/components/CodependencyQuizDialog.vue";
import { lang } from "@/settings/lang";
import { LocalStorageKeys } from "@/settings/localStorage";
import { NotifyType } from "@/types/api";

const testDialogRef = ref<InstanceType<typeof CodependencyQuizDialog> | undefined>();
const testResult = ref<number | undefined>(undefined);

onBeforeMount(() => {
  if (localStorage.getItem(LocalStorageKeys.CodependencyQuiz)) {
    testResult.value = Number(localStorage.getItem(LocalStorageKeys.CodependencyQuiz));
  }
});

const openTestDialog = () => {
  testDialogRef.value?.open();
};

const handleCloseTestDialog = () => {
  testDialogRef.value?.close();
};

const handleFinishTest = async (result: number | null) => {
  testResult.value = result || undefined;

  testDialogRef.value?.close();

  // TODO Finish notification logic.
  let text = "Кто-то заполнил тест на сайте!\n";
  text += "Дата и время заполнения:\n" + format(new Date(), "yyyy-MM-dd HH:mm") + "\n";
  text += "Сумма теста:\n" + testResult.value;

  await Notify.now(NotifyType.QuizResult, text);
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables";

.codependency-quiz-card {
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    line-height: 25px;
  }

  &__button {
    margin-top: $px-20;
    width: 170px;
  }
}
</style>
