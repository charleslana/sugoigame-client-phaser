<script setup lang="ts">
import { isDaytimeNow } from '@/utils/utils';

const props = defineProps<{
  bg?: '0';
}>();

function getBackground(): string {
  if (!props.bg) {
    return !isDaytimeNow() ? 'night-0' : 'day-0';
  }
  if (!isDaytimeNow()) {
    return `night-${props.bg}`;
  }
  return `day-${props.bg}`;
}
</script>

<template>
  <v-app>
    <div :class="['background', getBackground()]">
      <slot name="wrapper"></slot>
    </div>
  </v-app>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.day-0 {
  background-image: url('../assets/images/layout/day/0.jpg');
}

.night-0 {
  background-image: url('../assets/images/layout/night/0.jpg');
}

.day-1 {
  background-image: url('../assets/images/layout/day/1.jpg');
}

.night-1 {
  background-image: url('../assets/images/layout/night/1.jpg');
}
</style>
