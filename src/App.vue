<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import NoteApp from '@/components/NoteApp.vue';
</script>

<template>
  <AppHeader />
  <main>
    <NoteApp />
  </main>
</template>

<style>
:focus {
  outline: 3px solid #f2c658af;
}

::selection {
  background: #c6910d;
  color: #fff;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
