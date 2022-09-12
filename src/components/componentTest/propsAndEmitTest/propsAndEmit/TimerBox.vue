<template>
  <h1>{{ timerNumber }}</h1>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits({
  emitTimerNumber: (num) => {
    if (num.value === 0) {
      return true;
    } else {
      return false;
    }
  },
});

const timerNumber = ref(5);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    timerNumber.value--;
    if (timerNumber.value === 0) {
      clearInterval(timer);
      emit("emitTimerNumber", timerNumber);
    }
  }, 1000);
});
</script>

<style scoped>
h1 {
  color: black;
}
</style>
