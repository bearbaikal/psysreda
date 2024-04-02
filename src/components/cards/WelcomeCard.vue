<template>
  <BaseCard class="welcome-card">
    <template #header>
      <div class="welcome-card__title">
        <div>Татьяна Гвоздовская,</div>
        <div>гештальт - психотерапевт</div>
      </div>
      <img src="@/images/logo3.jpg" alt="Tatiana Gvozdovskaia" class="welcome-card__photo" />
    </template>
    <template #body>
      <div class="welcome-card__body">
        <div class="welcome-card__body-text">
          <div class="welcome-card__question">
            <span class="welcome-card__question-text">Научиться заботиться о себе</span>
            <span class="welcome-card__question-marks">!?</span>
          </div>
          Если ты задаёшь себе этот вопрос,<br />
          то значит ты <b>готов к изменениям</b> <br />и мы сможем начать совместную работу
        </div>
        <BaseButton :text="lang.button.writeMe" color-scheme="red" @click="openMessageDialog" />
      </div>
    </template>
  </BaseCard>
  <MessageDialog ref="messageDialogRef" @click:close="onClickCloseMessageDialog" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import BaseButton from "@/components/base/buttons/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import MessageDialog from "@/components/dialogs/MessageDialog.vue";
import { lang } from "@/settings/lang";

const messageDialogRef = ref<InstanceType<typeof MessageDialog> | undefined>();

const openMessageDialog = () => {
  messageDialogRef.value?.open();
};

const onClickCloseMessageDialog = () => {
  messageDialogRef.value?.close();
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.welcome-card {
  &__title {
    margin-bottom: $px-20;

    div:first-child {
      font-size: 1.5em;
    }

    div:nth-child(2) {
      margin-top: $px-5;
      font-size: 1em;
    }
  }

  &__question {
    padding-bottom: $px-20;
  }

  &__question-text {
    font-size: 1.5rem;
  }

  &__question-marks {
    padding-left: $px-1;
    font-size: 1.5rem;
  }

  &__photo {
    height: 450px;
    border-radius: 15px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body-text {
    margin-bottom: $px-20;
    text-align: center;
    font-size: 1.125rem;
  }
}
</style>
