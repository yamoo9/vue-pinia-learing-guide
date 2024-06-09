import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface INote {
  id: string;
  index: number;
  title: string;
  writer: string;
  body: string;
  pinned: boolean;
  createdAt: string;
}

export type INewNote = Pick<INote, 'title' | 'writer' | 'body'>;

export const MIN_TITLE_LENGTH = 3;
export const MIN_WRITER_LENGTH = 2;
export const MIN_BODY_LENGTH = 6;

const initialNotes: INote[] = [
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
];

export const useNotesStore = defineStore('notes', () => {
  // state
  const noteItems = ref<INote[]>(initialNotes);

  // getters
  const pinnedfirstNoteItems = computed(() => {
    console.log('re-calc');
    const allNotes = noteItems.value;
    const pinnedNotes = allNotes.filter((note) => note.pinned);
    const unPinnedNotes = allNotes.filter((note) => !note.pinned);
    return [...pinnedNotes, ...unPinnedNotes];
  });

  // actions
  const addNote = (note: Pick<INote, 'title' | 'writer' | 'body'>) => {
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

  const deleteNote = (noteId: string) => {
    noteItems.value = noteItems.value.filter((note) => note.id !== noteId);
  };

  const togglePin = (noteId: string) => {
    const note = noteItems.value.find((n) => n.id === noteId);
    if (note) {
      note.pinned = !note.pinned;
    }
  };

  return { noteItems, pinnedfirstNoteItems, addNote, deleteNote, togglePin };
});
