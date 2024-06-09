<script setup lang="ts">
import piniaLogo from '@/assets/pinia-logo.svg';
</script>

<template>
  <header>
    <h1>
      <img :src="piniaLogo" alt="Pinia 노트" height="100" />
      <span lang="en">Pinia Notes</span>
    </h1>
  </header>
</template>

<style scoped>
header {
  position: relative;
  block-size: 220px;

  h1 {
    margin-block-start: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 48px;
    padding-block-start: 40px;

    img {
      user-select: none;
      filter: drop-shadow(0 0 4px #fff) drop-shadow(0 0 12px #fff) drop-shadow(0 0 20px #fff)
        drop-shadow(0 0 40px #fff);
      animation: dungdung 6s ease-in-out infinite;
    }

    span {
      translate: 0 -20px;
      font-weight: 900;
      font-size: 48px;
      letter-spacing: 0.5px;
      color: transparent;
      background: linear-gradient(to top, #fff5dc, #ffd311);
      -webkit-background-clip: text;
      filter: drop-shadow(0 2px 2px #c89411) drop-shadow(0 4px 4px #fac339) brightness(1);
      animation: shine 2s ease-in-out infinite;
    }
  }

  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0.8;
    background-image: radial-gradient(circle at center center, #ffed9c, #fce995),
      repeating-radial-gradient(
        circle at center center,
        #ffed9c,
        #ffed9c,
        13px,
        transparent 26px,
        transparent 13px
      );
    background-blend-mode: multiply;
  }
}

@keyframes shine {
  0%,
  100% {
    filter: drop-shadow(0 2px 2px #c89411) drop-shadow(0 4px 4px #fac339) brightness(1);
  }
  50% {
    filter: drop-shadow(0 2px 2px #c89411) drop-shadow(0 4px 4px #fac339) brightness(1.06);
  }
}

@keyframes dungdung {
  0%,
  100% {
    translate: 0 16px;
  }
  50% {
    translate: 0 -16px;
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    rotate: 1deg;
  }

  20%,
  40%,
  60%,
  80% {
    rotate: -1deg;
  }
}
</style>
