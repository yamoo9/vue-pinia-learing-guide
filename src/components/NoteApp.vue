<script setup lang="ts">
import NoteForm from './NoteForm.vue';
import NoteList from './NoteList.vue';
</script>

<template>
  <div class="note">
    <NoteForm />
    <NoteList />
  </div>
</template>

<style scoped>
.note {
  display: flex;
  flex-flow: column;
  gap: 40px;
  block-size: calc(100vh - 220px);

  @media (min-width: 760px) {
    flex-flow: row;

    form {
      flex-shrink: 0;
      inline-size: 400px;
    }
  }
}
</style>
