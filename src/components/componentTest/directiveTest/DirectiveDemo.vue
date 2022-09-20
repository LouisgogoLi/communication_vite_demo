<template>
  <div>
    <input v-focus type="text" placeholder="input Number" v-model.number="num" />
    <h2 v-thousandsSeparator="num"></h2>
    <!-- 比較建議用computed解決 -->
    <h2>{{ numformat }}</h2>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { fnThousandsSeparator } from '@/common/methodCommon';

const num = ref(32859004247);
const numformat = computed(() => {
  return fnThousandsSeparator(num.value);
});
</script>

<style scoped>
input {
  height: 30px;
  background-color: #fff;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
