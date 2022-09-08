<template>
  <div>{{ injectLocation }} - {{ injectGeolocation }}</div>
  <button @click="injectUpdateLocation">點我</button>
</template>

<script>
export default {
  name: "ChildComponent",
};
</script>

<script setup>
import { inject } from "vue";
const injectLocation = inject("provideLocation");
const injectGeolocation = inject("provideGeolocation");
const injectUpdateLocation = inject("provideUpdateLocation");
</script>

<style scoped></style>
