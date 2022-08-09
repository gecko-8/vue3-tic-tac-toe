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
import { reactive } from 'vue';

import Board from './Board.vue';
import Winner from './Winner.vue';

import { States, getCleanGame, cloneGame, testGameComplete } from '../helpers/gameTools';

// Data
const gameData = reactive({ game: getCleanGame() });

// Event Handlers
const startGameHandler = () => {
  gameData.game = getCleanGame();
}

const moveHandler = (x, y) => {
  const currentMark = gameData.game.board[x][y];

  if (currentMark === States.NONE && !gameData.game.complete) {
    let updatedGame = cloneGame(gameData.game);
    updatedGame.moves = gameData.game.moves + 1;
    updatedGame.board[x][y] = gameData.game.currentPlayer;

    // Test for a win condition
    const winnerInfo = testGameComplete(updatedGame);
    if (winnerInfo) { // We have a WINNER!
      updatedGame.complete = true;
      updatedGame.winner = winnerInfo.winner;
      updatedGame.winnerCells = winnerInfo.winnerCells;
    } else {
      updatedGame.currentPlayer = updatedGame.currentPlayer === States.X ? States.O : States.X;
    }

    gameData.game = updatedGame;
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
