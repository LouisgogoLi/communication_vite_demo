<template>
  <h1>{{ nTestNumber }}</h1>
</template>

<script>
export default {
  name: "EmitTest",
};
</script>

<script setup>
import { onMounted, ref } from "vue";

const nTestNumber = ref(54088);

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
  emit("emitTestNumber", nTestNumber);
});
</script>

<style scoped></style>
