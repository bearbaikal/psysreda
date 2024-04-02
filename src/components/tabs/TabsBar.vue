<template>
  <div class="tabs-bar">
    <div
      v-for="tab in preparedTabs"
      :key="tab.route.name"
      @click="onClickTab(tab)"
      class="tabs-bar__tab"
      :class="{ 'tabs-bar__tab--active': tab.route.name === route.name }"
    >
      {{ tab.label }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { topMenuTabs } from "@/settings/topMenuTabs";
import type { MenuOption } from "@/types/menus";

const router = useRouter();
const route = useRoute();

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
  font-size: 1.5rem;
  margin-top: $px-25;
  margin-bottom: $px-30;
  flex-wrap: wrap;

  &__tab {
    cursor: pointer;
  }

  &__tab:hover {
    text-decoration: underline;
  }

  &__tab--active {
    text-decoration: underline;
  }
}
</style>
