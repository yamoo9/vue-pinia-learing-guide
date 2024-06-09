<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { INote } from './NoteItem.vue';

type INewNote = Pick<INote, 'title' | 'writer' | 'body'>;

const emit = defineEmits<{
  (e: 'add', note: INewNote): void;
}>();

const MIN_TITLE_LENGTH = 3;
const MIN_WRITER_LENGTH = 2;
const MIN_BODY_LENGTH = 6;

const note = reactive<INewNote>({
  title: '',
  writer: '',
  body: ''
});

const isInputedOneOfThem = computed(() => {
  return (
    note.title.trim().length >= MIN_TITLE_LENGTH ||
    note.writer.trim().length >= MIN_WRITER_LENGTH ||
    note.body.trim().length >= MIN_BODY_LENGTH
  );
});

const isAllInputed = computed(() => {
  return (
    note.title.trim().length >= MIN_TITLE_LENGTH &&
    note.writer.trim().length >= MIN_WRITER_LENGTH &&
    note.body.trim().length >= MIN_BODY_LENGTH
  );
});

const formRef = ref<null | HTMLFormElement>(null);

const handleSubmit = () => {
  const formElement = formRef.value;

  if (formElement) {
    const disabledButton = formElement.querySelector('[type="submit"][aria-disabled="true"]');
    if (disabledButton) return;
  }

  emit('add', note);
  handleReset();
};

const handleReset = () => {
  const formElement = formRef.value;

  if (formElement) {
    const disabledButton = formElement.querySelector('[type="reset"][aria-disabled="true"]');
    if (disabledButton) return;
  }

  note.title = '';
  note.writer = '';
  note.body = '';
};
</script>

<template>
  <form ref="formRef" @submit.prevent="handleSubmit" @reset.prevent="handleReset">
    <div class="formControl">
      <label for="noteTitle" aria-label="제목">제&nbsp;&nbsp;&nbsp;목</label>
      <input type="text" id="noteTitle" v-model="note.title" placeholder="노트 제목" />
    </div>
    <div class="formControl">
      <label for="noteWriter">작성자</label>
      <input type="text" id="noteWriter" v-model="note.writer" placeholder="작성자 이름" />
    </div>
    <div class="formControl" aria-label="내용">
      <label for="noteBody">내&nbsp;&nbsp;&nbsp;용</label>
      <textarea id="noteBody" v-model="note.body" rows="5" cols="30" placeholder="노트 내용 작성" />
    </div>
    <div class="buttonGroup" role="group">
      <button type="submit" :aria-disabled="!isAllInputed">추가</button>
      <button type="reset" :aria-disabled="!isInputedOneOfThem">초기화</button>
    </div>
  </form>
</template>

<style scoped>
form {
  --color: #c1962b;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  gap: 12px;
  border: 2px solid #ffed9c;
  padding-block: 36px 32px;

  background:
    radial-gradient(circle, transparent 20%, #fff 20%, #fff 80%, transparent 80%, transparent),
    radial-gradient(circle, transparent 20%, #fff 20%, #fff 80%, transparent 80%, transparent) 25px
      25px,
    linear-gradient(#ffed9c 2px, transparent 2px) 0 -1px,
    linear-gradient(90deg, #ffed9c 2px, #fff 2px) -1px 0;
  background-size:
    50px 50px,
    50px 50px,
    25px 25px,
    25px 25px;
}

.formControl {
  display: flex;
  gap: 24px;
  inline-size: 320px;
  justify-content: space-between;

  label {
    font-size: 14px;
    font-weight: 700;
    color: var(--color);
    translate: 0 8px;
  }

  input,
  textarea {
    flex: 1;
    border: 1px solid var(--color);
    border-radius: 0;
    padding: 8px 12px;
    font-size: 16px;
    color: color-mix(in hsl shorter hue, var(--color) 100%, #514c32 80%);
    background: #fffa;

    &::placeholder {
      color: var(--color);
    }
  }

  textarea {
    line-height: 1.5;
    resize: vertical;
    min-block-size: 90px;
    max-block-size: 180px;
  }
}

.buttonGroup {
  display: flex;
  align-items: end;
  gap: 8px;
  inline-size: 320px;

  button {
    flex: 1;
    border: 1px solid var(--color);
    padding-block: 8px;
    background: transparent;
    color: var(--color);
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: var(--color);
      color: #fff;
    }

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      outline: 3px solid #f2c658af;
    }

    &:disabled,
    &[aria-disabled='true'] {
      cursor: not-allowed;
      opacity: 0.7;
      border-color: currentColor;
      color: #767361;
    }
  }
}
</style>
