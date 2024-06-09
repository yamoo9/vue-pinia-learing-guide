<script setup lang="ts">
import { computed, toRefs } from 'vue';
import NotePin from './NotePin.vue';
import NoteTrash from './NoteTrash.vue';
import { useNotesStore, type INote } from '@/stores/notes';

const props = defineProps<{ item: INote }>();
const { item } = toRefs(props);

const { deleteNote, togglePin } = useNotesStore();

const itemCreatedAt = computed(() => {
  const { createdAt } = item.value;
  const [year, month, date, time] = createdAt.split('. ');
  return `${year}년 ${month}월 ${date}일 / ${time}`;
});

const randomRotateDegree = computed(() => (Math.random() < 0.5 ? '-0.5deg' : '0.5deg'));
</script>

<template>
  <li class="item" :style="`rotate: ${randomRotateDegree}`">
    <h3 :title="item.title">#{{ item.index }} {{ item.title }}</h3>
    <time :datetime="item.createdAt">{{ itemCreatedAt }}</time>
    <p>
      {{ item.body }}
    </p>
    <div class="buttonGroup" role="group">
      <NotePin :size="16" :pinned="item.pinned" @click="togglePin(item.id)" />
      <NoteTrash :size="16" @click="deleteNote(item.id)" />
    </div>
  </li>
</template>

<style scoped>
.item {
  position: relative;
  inline-size: 240px;
  block-size: 180px;
  padding: 20px;
  background: linear-gradient(to right bottom, #fff4c2, #ffd858);
  border: 0.5px solid #ffd858;
  box-shadow: 4px 4px 12px hsla(46, 93%, 42%, 0.1);
  rotate: -0.5deg;

  * {
    margin-block-start: 0;
  }

  h3 {
    width: 86%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-block-end: 4px;
    font-size: 18px;
    line-height: 1;
    color: #c6910d;
  }

  time {
    display: inline-block;
    font-size: 11px;
    color: #a77b0a;
    margin-block-end: 12px;
  }

  p {
    overflow: auto;
    max-block-size: 120px;
    line-height: 1.5;
    font-size: 14px;
    color: #805e07;
  }

  .buttonGroup {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 4px;
  }
}
</style>
