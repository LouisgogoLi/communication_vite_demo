<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x: {{ x }} : y: {{ y }}</h2>
  </div>
</template>

<script setup>
import { fnMousePosition } from '@/common/methodCommon';
const { x, y } = fnMousePosition();
</script>

<style lang="scss" scoped></style>
