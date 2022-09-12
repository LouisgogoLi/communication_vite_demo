<template>
  <a class="title" @click="props.propsHandListShow" data-test="titlebar_title"
    >點選測試Title</a
  >
</template>

<script setup>
const props = defineProps({
  propsHandListShow: {
    type: Function,
    default: () => {},
  },
});
</script>

<style scoped>
.title {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #42b983;
  font-weight: bold;
  color: darkslategray;
  font-size: 20px;
  border-bottom: 1px solid #d2d2d2;
}
</style>
