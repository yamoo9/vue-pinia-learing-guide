<script setup lang="ts">
import NoteItem, { type INote } from './NoteItem.vue';

const props = defineProps<{ items: INote[] }>();

const emit = defineEmits<{
  (e: 'delete', noteId: string): void;
  (e: 'togglePin', noteId: string): void;
}>();

const handleDeleteNote = (noteId: string) => {
  emit('delete', noteId);
};

const handleTogglePin = (noteId: string) => {
  emit('togglePin', noteId);
};
</script>

<template>
  <ul>
    <NoteItem
      v-for="item in props.items"
      :key="item.id"
      :item="item"
      @delete="handleDeleteNote"
      @togglePin="handleTogglePin"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  margin-block: 40px;

  display: flex;
  flex-flow: row wrap;
  align-content: start;
  justify-content: center;
  gap: 40px;

  @media (min-width: 602px) {
    inline-size: 96vw;
    margin-inline: auto;
    justify-content: start;
  }
}
</style>
