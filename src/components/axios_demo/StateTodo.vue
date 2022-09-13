<template>
  <div class="block">
    <h1>number: {{ idx }}</h1>
    <button @click="addState()">add</button>
  </div>
</template>

<script setup>
import { fnStateTodo } from '@/common/methodCommon';
const { idx, addState } = fnStateTodo();
</script>

<style lang="scss" scoped>
.block {
  width: 300px;
  padding: 15px 15px;
  margin: 0 auto;
  border: 1px solid #000;
  margin-bottom: 5px;
}
</style>
