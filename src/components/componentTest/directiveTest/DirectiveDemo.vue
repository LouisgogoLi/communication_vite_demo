<template>
  <div>
    <input
      v-focus
      type="text"
      placeholder="input Number"
      v-model.number="num"
    />
    <h2 v-thousandsSeparator="num"></h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
const num = ref(32859004247);
</script>

<style scoped>
input {
  height: 30px;
  background-color: #fff;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
