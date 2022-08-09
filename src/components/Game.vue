<template>
  <div v-if="gameData.game != null" class="game">
    <div class="game-board-container">
      <Board :game="gameData.game.board" :winners="gameData.game.winnerCells" @move="moveHandler" />
      <Winner v-if="gameData.game.complete" :player="gameData.game.winner" />
    </div>
    <div class="game-controls">
      <button class="new-game-button" @click="startGameHandler">{{ gameData.game.complete ? "New Game" : "Restart Game" }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Board from './Board.vue';
import Winner from './Winner.vue';

import { States, getCleanGame, cloneGame, testGameComplete } from '../helpers/gameTools';

// Data
const game = ref(getCleanGame());

// Event Handlers
const startGameHandler = () => {
  game.value = getCleanGame();
}

const moveHandler = (x, y) => {
  const currentMark = game.value.board[x][y];

  if (currentMark === States.NONE && !game.value.complete) {
    let updatedGame = cloneGame(game.value);
    updatedGame.moves = game.value.moves + 1;
    updatedGame.board[x][y] = game.value.currentPlayer;

    // Test for a win condition
    const winnerInfo = testGameComplete(updatedGame);
    if (winnerInfo) { // We have a WINNER!
      updatedGame.complete = true;
      updatedGame.winner = winnerInfo.winner;
      updatedGame.winnerCells = winnerInfo.winnerCells;
    } else {
      updatedGame.currentPlayer = updatedGame.currentPlayer === States.X ? States.O : States.X;
    }

    game.value = updatedGame;
  }
}
</script>

<style scoped>
.game-board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-controls {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.game-controls > * {
    margin: 2px;
}

.new-game-button {
  background: lightgreen;
  border: none;
  border-radius: 10px;
  color: darkgreen;
  font-weight: bold;
  padding: 0.5rem 2rem;
}
</style>
