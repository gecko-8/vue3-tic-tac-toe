<template>
  <div class="marker" :class="{ 'winner': winner }">
    <div class="container">
      <div class="mark">
        <img v-if="state === States.X" :src="XSymbol" alt="X" />
        <img v-if="state === States.O" :src="OSymbol" alt="O" />
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
  data() {
    return {
      XSymbol,
      OSymbol,
      States
    }
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
