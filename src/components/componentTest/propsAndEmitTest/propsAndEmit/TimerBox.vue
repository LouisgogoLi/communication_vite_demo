<template>
  <h1>{{ nTimerNumber }}</h1>
</template>

<script>
export default {
  name: "TimerBox",
};
</script>

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

const nTimerNumber = ref(5);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    nTimerNumber.value--;
    if (nTimerNumber.value === 0) {
      clearInterval(timer);
      emit("emitTimerNumber", nTimerNumber);
    }
  }, 1000);
});
</script>

<style scoped>
h1 {
  color: black;
}
</style>
