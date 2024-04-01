<template>
  <div class="tabs-bar">
    <div v-for="tab in preparedTabs" :key="tab.path" @click="onClickTab(tab)" class="tabs-bar__tab">
      {{ tab.label }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import { topMenuTabs } from "@/settings/topMenuTabs";
import type { MenuOption } from "@/types/menus";

const router = useRouter();

const preparedTabs = computed(() => {
  return topMenuTabs.filter((el) => !el.disabled);
});

const onClickTab = (tab: MenuOption) => {
  router.push({ name: tab.route.name });
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
.tabs-bar {
  display: flex;
  justify-content: center;
  column-gap: $px-15;
  row-gap: $px-10;
  font-size: 1.25rem;
  margin-top: $px-10;
  margin-bottom: $px-30;
  flex-wrap: wrap;

  &__tab {
    cursor: pointer;
  }

  &__tab:hover {
    text-decoration: underline;
  }
}
</style>
