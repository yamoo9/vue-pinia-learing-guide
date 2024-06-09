<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pinned?: boolean;
  size?: number;
  stroke?: number;
}

const props = withDefaults(defineProps<Props>(), {
  pinned: false,
  size: 24,
  stroke: 1.5
});

const pinLabel = computed(() => (props.pinned ? '핀 꽂힘' : '핀 안꽂힘'));
</script>

<template>
  <button type="button" class="pin" :aria-label="pinLabel" :title="pinLabel">
    <svg
      :width="`${props.size}px`"
      :height="`${props.size}px`"
      viewBox="0 0 24 24"
      :stroke-width="props.stroke"
      fill="none"
      color="currentColor"
    >
      <path
        d="M9.5 14.5L3 21"
        stroke="currentColor"
        :stroke-width="props.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z"
        :fill="props.pinned ? 'currentColor' : undefined"
        stroke="currentColor"
        :stroke-width="props.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
