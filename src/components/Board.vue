<template>
  <div class="board">
    <div class="board-square board-square-00">
      <Marker :state="game[0][0]" :winner="winners && winners[0][0]" @click="onMove(0, 0)" />
    </div>
    <div class="board-square board-square-01">
      <Marker :state="game[0][1]" :winner="winners && winners[0][1]" @click="onMove(0, 1)" />
    </div>
    <div class="board-square board-square-02">
      <Marker :state="game[0][2]" :winner="winners && winners[0][2]" @click="onMove(0, 2)" />
    </div>
    <div class="board-square board-square-10">
      <Marker :state="game[1][0]" :winner="winners && winners[1][0]" @click="onMove(1, 0)" />
    </div>
    <div class="board-square board-square-11">
      <Marker :state="game[1][1]" :winner="winners && winners[1][1]" @click="onMove(1, 1)" />
    </div>
    <div class="board-square board-square-12">
      <Marker :state="game[1][2]" :winner="winners && winners[1][2]" @click="onMove(1, 2)" />
    </div>
    <div class="board-square board-square-20">
      <Marker :state="game[2][0]" :winner="winners && winners[2][0]" @click="onMove(2, 0)" />
    </div>
    <div class="board-square board-square-21">
      <Marker :state="game[2][1]" :winner="winners && winners[2][1]" @click="onMove(2, 1)" />
    </div>
    <div class="board-square board-square-22">
      <Marker :state="game[2][2]" :winner="winners && winners[2][2]" @click="onMove(2, 2)" />
    </div>
  </div>
</template>

<script setup>
import Marker from './Marker.vue';

defineProps({
  game: Object,
  winners: Array
});

const emit = defineEmits(['move']);

const onMove = (x, y) => emit('move', x, y);
</script>

<style scoped>
.board {
  display: grid;
  gap: 6px 6px;
}

.board-square {
  height: 100px;
  width: 100px;
}

.board-square-00 {
  grid-row-start: 1;
  grid-column-start: 1;
}

.board-square-01 {
  grid-row-start: 1;
  grid-column-start: 2;
}

.board-square-02 {
  grid-row-start: 1;
  grid-column-start: 3;
}

.board-square-10 {
  grid-row-start: 2;
  grid-column-start: 1;
}

.board-square-11 {
  grid-row-start: 2;
  grid-column-start: 2;
}

.board-square-12 {
  grid-row-start: 2;
  grid-column-start: 3;
}

.board-square-20 {
  grid-row-start: 3;
  grid-column-start: 1;
}

.board-square-21 {
  grid-row-start: 3;
  grid-column-start: 2;
}

.board-square-22 {
  grid-row-start: 3;
  grid-column-start: 3;
}</style>
