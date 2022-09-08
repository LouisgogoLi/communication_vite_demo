<template>
  <div>
    <input
      v-focus
      type="text"
      placeholder="input Number"
      v-model.number="nNum"
    />
    <h1 v-thousandsSeparator="nNum"></h1>
  </div>
</template>

<script>
export default {
  name: "DirectiveDemo",
};
</script>

<script setup>
import { ref } from "vue";
const nNum = ref(32859004247);
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: #fff;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
