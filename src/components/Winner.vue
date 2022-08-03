<template>
  <div>
    <h2 v-if="player === States.X" class="win">X Is the Winner!</h2>
    <h2 v-if="player === States.O" class="win">O Is the Winner!</h2>
    <h2 v-if="!player" class="scratch">No Winner</h2>
  </div>
</template>

<script>
import { States } from '../helpers/gameTools';

export default {
  props: {
    player: String
  },
  data() {
    return {
      States
    }
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
