<template>
  <div>
    <h2 v-if="player === STATES.X" class="win">X Is the Winner!</h2>
    <h2 v-if="player === STATES.O" class="win">O Is the Winner!</h2>
    <h2 v-if="!player" class="scratch">No Winner</h2>
  </div>
</template>

<script>
import { States } from '../helpers/gameTools';

export default {
  props: {
    player: String
  },
  created() {
    // Add constants to the scope so they're available to the template
    this.STATES = States;
  }
}
</script>

<style scoped>
.win {
  color: green;
}

.scratch {
  color: red;
}
</style>
