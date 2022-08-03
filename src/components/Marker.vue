<template>
  <div class="marker" :class="{ 'winner': winner }">
    <div class="container">
      <div class="mark">
        <img v-if="state === STATES.X" :src="X_SYMBOL" alt="X" />
        <img v-if="state === STATES.O" :src="O_SYMBOL" alt="O" />
      </div>
    </div>
  </div>
</template>

<script>
import { States } from '../helpers/gameTools';

import XSymbol from '../assets/x-symbol-svgrepo-com.svg';
import OSymbol from '../assets/o-symbol-svgrepo-com.svg';

export default {
  props: {
    state: String,
    winner: Boolean
  },
  created() {
    // Add constants to the scope so they're available to the template
    this.X_SYMBOL = XSymbol;
    this.O_SYMBOL = OSymbol;
    this.STATES = States;
  }
}
</script>

<style scoped>
.marker {
  height: 100%;
  width: 100%;
  background: darkgreen;
  border-radius: 8px;
}

.marker.winner {
  background: orange;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mark {
  height: 80%;
  width: 80%;
}

.mark path {
  color: white;
}
</style>
