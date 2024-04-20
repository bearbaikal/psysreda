<template>
  <BaseDialog ref="baseDialogRef" @click:close="emit('click:close', result || resultFromLocalStorage)">
    <template #header> {{ lang.title.codependencyQuiz }}</template>
    <template #body>
      <div class="test-dialog__body">
        <QuizResult v-if="isShowResult || resultFromLocalStorage" :result="result || Number(resultFromLocalStorage)" />
        <template v-else>
          <TextParser v-if="!questionNumber" :lines="lang.quiz.introduction" />
          <QuizQuestion
            v-else
            v-model="answers[questionNumber]"
            :question="codependencyQuiz[questionNumber - 1]"
            :info="`${questionNumber}/${codependencyQuiz.length}`"
          />
        </template>
      </div>
    </template>
    <template #buttons>
      <div class="test-dialog__buttons">
        <BaseButton
          :text="lang.button.close"
          color-scheme="whiteAndBlack"
          @click="emit('test:finish', result || resultFromLocalStorage)"
        />
        <BaseButton
          :text="actionButtonText"
          color-scheme="red"
          @click="handleClickActionButton"
          :disabled="isActionButtonDisabled"
        />
      </div>
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

import BaseButton from "@/components/base/buttons/BaseButton.vue";
import BaseDialog from "@/components/base/dialogs/BaseDialog.vue";
import TextParser from "@/components/TextParser.vue";
import QuizQuestion from "@/modules/codependencyQuiz/components/QuizQuestion.vue";
import QuizResult from "@/modules/codependencyQuiz/components/QuizResult.vue";
import { codependencyQuiz } from "@/settings/codependencyQuiz";
import { lang } from "@/settings/lang";
import { LocalStorageKeys } from "@/settings/localStorage";

const emit = defineEmits(["click:close", "test:finish"]);

const resultFromLocalStorage = ref<number | undefined>();

const baseDialogRef = ref<InstanceType<typeof BaseDialog> | undefined>();
const questionNumber = ref<number>(0);
const answers = ref<Record<number, number>>({});
const isShowResult = ref<boolean>(false);

const isLastQuestion = computed<boolean>(() => {
  return questionNumber.value === codependencyQuiz.length;
});

const actionButtonText = computed<string>(() => {
  if (resultFromLocalStorage.value) {
    return lang.button.passAgain;
  }

  if (!questionNumber.value) {
    return lang.button.startTest;
  }

  if (isShowResult.value) {
    return lang.button.finish;
  }

  if (isLastQuestion.value) {
    return lang.button.showResult;
  }

  return `${lang.button.continue}`;
});

const result = computed<number>(() => {
  return Object.values(answers.value).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
});

const isActionButtonDisabled = computed<boolean>(() => {
  return !!questionNumber.value && !isShowResult.value && typeof answers.value[questionNumber.value] === "undefined";
});

const handleClickActionButton = () => {
  if (resultFromLocalStorage.value) {
    resultFromLocalStorage.value = undefined;
    localStorage.removeItem(LocalStorageKeys.CodependencyQuiz);
  }

  if (isShowResult.value) {
    emit("test:finish", result.value);

    return;
  }

  if (isLastQuestion.value) {
    localStorage.setItem(LocalStorageKeys.CodependencyQuiz, result.value.toString());

    isShowResult.value = true;

    return;
  }

  console.log("NEXT question");

  questionNumber.value++;
};

defineExpose({
  open: () => {
    questionNumber.value = 0;
    answers.value = {};
    isShowResult.value = false;
    baseDialogRef.value?.open();
    if (localStorage.getItem(LocalStorageKeys.CodependencyQuiz)) {
      resultFromLocalStorage.value = Number(localStorage.getItem(LocalStorageKeys.CodependencyQuiz));
    }
  },
  close: () => {
    baseDialogRef.value?.close();
  },
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables";

.test-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $px-20;
    font-size: 1.125rem;
  }

  &__buttons {
    margin-top: $px-30;
    display: flex;
    justify-content: space-between;
  }
}
</style>
