<script setup lang="ts">
import { computed, ref } from 'vue';
import NoteForm from './NoteForm.vue';
import NoteList from './NoteList.vue';
import type { INote } from './NoteItem.vue';

const noteItems = ref<INote[]>([
  {
    id: '746ca396-b426-4d38-9a20-b88c68992b1d',
    index: 1,
    title: '성수동 맛집, 고로고로',
    writer: '이든',
    body: '성수에서 건대 사이에는 좋아하는 성수동 맛집들이 꽤 있는데, 그중 고로고로는 장어덮밥이랑 이쿠라 먹고 싶을 때 찾아가는 곳.',
    createdAt: '2024. 4. 17. 오후 2:42:21',
    pinned: false
  },
  {
    id: 'dd78935e-0c5d-4a03-ae7b-162e3e94e055',
    index: 2,
    writer: '박위',
    title: '유부초밥 전문점, 오트보트',
    body: '완전 취향저격의 귀리곤약밥에다가 저칼로리 유부초밥 및 분식을 먹을 수 있는 곳',
    createdAt: '2024. 5. 28. 오후 8:59:47',
    pinned: true
  }
]);

const pinnedfirstNoteItems = computed(() => {
  const allNotes = noteItems.value;
  const pinnedNotes = allNotes.filter((note) => note.pinned);
  const unPinnedNotes = allNotes.filter((note) => !note.pinned);
  return [...pinnedNotes, ...unPinnedNotes];
});

const handleAddNote = (note: Pick<INote, 'title' | 'writer' | 'body'>) => {
  const newNote: INote = {
    id: crypto.randomUUID(),
    index: noteItems.value.length + 1,
    title: note.title,
    writer: note.writer,
    body: note.body,
    pinned: false,
    createdAt: new Date().toLocaleString()
  };

  noteItems.value.push(newNote);
};

const handleDeleteNote = (noteId: string) => {
  noteItems.value = noteItems.value.filter((note) => note.id !== noteId);
};

const togglePinned = (noteId: string) => {
  const note = noteItems.value.find((n) => n.id === noteId);
  if (note) {
    note.pinned = !note.pinned;
  }
};
</script>

<template>
  <div class="note">
    <NoteForm @add="handleAddNote" />
    <NoteList :items="pinnedfirstNoteItems" @delete="handleDeleteNote" @togglePin="togglePinned" />
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
