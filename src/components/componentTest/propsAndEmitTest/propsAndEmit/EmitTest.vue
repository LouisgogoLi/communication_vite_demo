<template>
  <h1>{{ testNumber }}</h1>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const testNumber = ref(54088);

const emit = defineEmits({ emitTestNumber: null });
//emits可做基本驗證
// const emit = defineEmits({
//   emitTestNumber: (num) => {
//     if (num.value === 54088) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

onMounted(() => {
  emit('emitTestNumber', testNumber);
});
</script>

<style scoped></style>
