<template>
  <div class="text-link">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
defineProps({
  text: String,
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.text-link {
  color: $primary-color;
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: underline;
}

.text-link:hover {
  text-decoration: none;
}
</style>
