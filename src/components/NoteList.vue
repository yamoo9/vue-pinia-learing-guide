<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import NoteItem from './NoteItem.vue';

const notes = useNotesStore();
</script>

<template>
  <ul>
    <NoteItem v-for="item in notes.pinnedfirstNoteItems" :key="item.id" :item="item" />
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
