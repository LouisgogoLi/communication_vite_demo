<template>
  <MousePosition />
  <StateTodo />
  <StateTodo />
  <FetchData />
</template>

<script setup>
import MousePosition from '@/components/axios_demo/MousePosition.vue';
import StateTodo from '@/components/axios_demo/StateTodo.vue';
import FetchData from '@/components/axios_demo/FetchData.vue';
</script>

<style scoped>
.box {
  margin-bottom: 20px;
}
</style>
