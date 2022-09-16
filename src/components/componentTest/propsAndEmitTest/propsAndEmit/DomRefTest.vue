<template>
  <div>
    <input v-model="conts" v-if="openTest" ref="getChildConts" />
    <button @click="fnChangeOpenText">按我開關</button>
    <div>{{ conts }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '台北市信義區',
  },
]);
const conts = ref('我是子元件');
const openTest = ref(true);
const fnChangeOpenText = () => {
  openTest.value = !openTest.value;
};

const getChildConts = ref(null);

onMounted(() => {
  getChildConts.value.focus();
});

defineExpose({
  tableData,
  conts,
  openTest,
  fnChangeOpenText,
  getChildConts,
});
</script>

<style scoped>
input {
  background-color: pink;
}
</style>
