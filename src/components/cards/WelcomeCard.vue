<template>
  <BaseCard class="welcome-card">
    <template #header>
      <div class="welcome-card__title">
        <div>Татьяна Гвоздовская,</div>
        <div><b>сертифицированный</b><br />гештальт - психотерапевт</div>
      </div>
      <img src="@/images/logo3.jpg" alt="Tatiana Gvozdovskaia" class="welcome-card__photo" />
    </template>
    <template #body>
      <div class="welcome-card__body">
        <div class="welcome-card__body-text">
          <div class="welcome-card__answer">
            Я работаю с клиентами более 15 лет и считаю, что в первую очередь нужно...
          </div>
          <div class="welcome-card__question">
            <span class="welcome-card__question-text">Научиться заботиться о себе</span>
            <span class="welcome-card__question-marks">!</span>
          </div>
        </div>
        <BaseButton :text="lang.button.writeMe" color-scheme="red" @click="openMessageDialog" />
      </div>
    </template>
  </BaseCard>
  <MessageDialog ref="messageDialogRef" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import BaseButton from "@/components/base/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import MessageDialog from "@/components/dialogs/MessageDialog.vue";
import { lang } from "@/settings/lang";

const messageDialogRef = ref<InstanceType<typeof MessageDialog> | undefined>();

const openMessageDialog = () => {
  window.open("https://taplink.cc/mypsyholog", "_blank");
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

  &__answer {
    font-size: 1.25rem;
    padding-bottom: 10px;
  }

  &__question-text {
    font-size: 1.75rem;
  }

  &__question-marks {
    padding-left: $px-1;
    font-size: 1.5rem;
  }

  &__photo {
    height: 380px;
    border-radius: 15px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body-text {
    //margin-bottom: $px-10;
    text-align: center;
    font-size: 1.125rem;
  }
}
</style>
