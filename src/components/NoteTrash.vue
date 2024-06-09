<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  size?: number;
  stroke?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  stroke: 1.5
});

const { size, stroke } = toRefs(props);
</script>

<template>
  <button type="button" class="pin" aria-label="노트 삭제" title="노트 삭제">
    <svg
      :width="size + 'px'"
      :height="size + 'px'"
      viewBox="0 0 24 24"
      :stroke-width="stroke"
      fill="none"
      color="currentColor"
    >
      <path
        d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
        stroke="currentColor"
        :stroke-width="stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
        stroke="currentColor"
        :stroke-width="stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  background: transparent;
  inline-size: v-bind('props.size + 8 + "px"');
  block-size: v-bind('props.size + 8 + "px"');

  &:hover {
    background: hsla(55, 73%, 55%, 0.3);
  }
}
</style>
