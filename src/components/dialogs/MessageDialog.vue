<template>
  <BaseDialog ref="baseDialogRef" @click:close="close">
    <template #header>
      {{ lang.title.messageMe }}
    </template>
    <template #body>
      <div class="message_dialog__body">
        <InputText v-model="form.name" :placeholder="lang.placeholder.yoursName" :invalid="!validation.name()" />
        <InputText v-model="form.phone" :placeholder="lang.placeholder.yoursPhone" :invalid="!validation.phone()" />
        <Textarea
          v-model="form.message"
          rows="5"
          cols="30"
          :placeholder="lang.placeholder.messageToMe"
          :invalid="!validation.message()"
        />
      </div>
    </template>
    <template #buttons>
      <div class="message_dialog__buttons">
        <BaseButton
          :text="lang.button.writeMe"
          :disabled="!isFormValid"
          color-scheme="red"
          @click="handleClickWriteMe"
        />
        <BaseButton :text="lang.button.close" color-scheme="whiteAndBlack" @click="close" />
      </div>
    </template>
  </BaseDialog>
  <BaseDialog ref="successDialogRef">
    <template #header>
      {{ lang.title.yourMessageSent }}
    </template>
    <template #body> {{ lang.message.thanksThatWrote }} </template>
    <template #buttons>
      <div style="margin-top: 20px">
        <BaseButton :text="lang.button.close" color-scheme="whiteAndBlack" @click="closeSuccessDialog" />
      </div>
    </template>
  </BaseDialog>
  <BaseDialog ref="errorDialogRef">
    <template #header>
      {{ lang.title.errorSendMessage }}
    </template>
    <template #body> {{ lang.message.errorSendMessage }} </template>
    <template #buttons>
      <div style="margin-top: 20px">
        <BaseButton :text="lang.button.close" color-scheme="whiteAndBlack" @click="closeErrorDialog" />
      </div>
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { format } from "date-fns";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { computed, reactive, ref } from "vue";

import { Notify } from "@/classes/Notify";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseDialog from "@/components/base/BaseDialog.vue";
import { lang } from "@/settings/lang";
import { NotifyRecipientRole, NotifyType } from "@/types/api";

const MIN_NAME_LENGTH = 2;
const MIN_PHONE_LENGTH = 9; // For local Spain number.
const MIN_MESSAGE_LENGTH = 10;

const formInitialValue = () => ({
  name: "",
  phone: "",
  message: "",
});

const baseDialogRef = ref<InstanceType<typeof BaseDialog>>();
const successDialogRef = ref<InstanceType<typeof BaseDialog>>();
const errorDialogRef = ref<InstanceType<typeof BaseDialog>>();

const form = reactive(formInitialValue());

const validation = reactive({
  name: (): boolean => {
    return form.name.trim().length >= MIN_NAME_LENGTH;
  },
  phone: (): boolean => {
    return form.phone.replace(/\s/g, "").length >= MIN_PHONE_LENGTH;
  },
  message: (): boolean => {
    return form.message.trim().length >= MIN_MESSAGE_LENGTH;
  },
});

const isFormValid = computed<boolean>(() => {
  return validation.phone() && validation.name() && validation.message();
});
const handleClickWriteMe = async () => {
  let message: string = "";
  message += "---------------------------------------------------------------";
  message += '\n<b>Запрос с сайта psysreda.ru через форму "Написать мне":</b>';
  message += "\n---------------------------------------------------------------";
  message += "\n\nИмя:\n" + form.name;
  message += "\n\nТелефон:\n" + form.phone;
  message += "\n\nСообщение:\n" + form.message;
  message += "\n\nДата, время:\n" + format(new Date(), "yyyy-MM-dd HH:mm") + "\n";

  try {
    const { success } = await Notify.now(NotifyType.MessageFromVisitor, message);
    if (success) {
      await successDialogRef.value?.open();
    } else {
      await errorDialogRef.value?.open();
    }
  } catch (e) {
    await errorDialogRef.value?.open();
  } finally {
    close();
    Object.assign(form, formInitialValue());
  }
};

const open = () => {
  baseDialogRef.value?.open();
};

const close = () => {
  baseDialogRef.value?.close();
};

const closeSuccessDialog = () => {
  successDialogRef.value?.close();
};

const closeErrorDialog = () => {
  errorDialogRef.value?.close();
};

defineExpose({
  open,
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.message_dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $px-20;
  }

  &__buttons {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
}
</style>
