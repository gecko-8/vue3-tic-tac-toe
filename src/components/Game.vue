<template>
  <div v-if="game != null" class="game">
    <div class="game-board-container">
      <Board :game="game.board" :winners="game.winnerCells" @move="moveHandler" />
      <Winner v-if="game.complete" :player="game.winner" />
    </div>
    <div class="game-controls">
      <button class="new-game-button" @click="startGameHandler">{{ game.complete ? "New Game" : "Restart Game" }}</button>
    </div>
  </div>
</template>

<script>
import Board from './Board.vue';
import Winner from './Winner.vue';

import { States, getCleanGame, cloneGame, testGameComplete } from '../helpers/gameTools';

export default {
  components: {
    Board,
    Winner
  },
  data() {
    return {
      game: null
    }
  },
  methods: {
    startGameHandler() {
      this.game = getCleanGame();
    },
    moveHandler(x, y) {
      const currentMark = this.game.board[x][y];

      if (currentMark === States.NONE && !this.game.complete) {
        let updatedGame = cloneGame(this.game);
        updatedGame.moves = this.game.moves + 1;
        updatedGame.board[x][y] = this.game.currentPlayer;

        // Test for a win condition
        const winnerInfo = testGameComplete(updatedGame);
        if (winnerInfo) { // We have a WINNER!
          updatedGame.complete = true;
          updatedGame.winner = winnerInfo.winner;
          updatedGame.winnerCells = winnerInfo.winnerCells;
        } else {
          updatedGame.currentPlayer = updatedGame.currentPlayer === States.X ? States.O : States.X;
        }

        this.game = updatedGame;
      }
    }
  },
  mounted() {
    this.game = getCleanGame();
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
