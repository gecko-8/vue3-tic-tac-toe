<template>
  <div>
    <h2 v-if="player === States.X" class="win">X Is the Winner!</h2>
    <h2 v-else-if="player === States.O" class="win">O Is the Winner!</h2>
    <h2 v-else="!player" class="scratch">No Winner</h2>
  </div>
</template>

<script setup>
import { States } from '../helpers/gameTools';

// Props
defineProps(['player']);
</script>

<style scoped>
.win {
  color: green;
}

.scratch {
  color: red;
}
</style>
