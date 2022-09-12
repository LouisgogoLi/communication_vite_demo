<template>
  <div>
    <input v-model="sConts" v-if="bOpenTest" ref="getChildConts" />
    <button @click="fnChangeOpenText">按我開關</button>
    <div>{{ sConts }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const aTableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '台北市信義區',
  },
]);
const sConts = ref('我是子元件');
const bOpenTest = ref(true);
const fnChangeOpenText = () => {
  bOpenTest.value = !bOpenTest.value;
};

const getChildConts = ref(null);

onMounted(() => {
  getChildConts.value.focus();
});

defineExpose({
  aTableData,
  sConts,
  bOpenTest,
  fnChangeOpenText,
  getChildConts,
});
</script>

<style scoped>
input {
  background-color: pink;
}
</style>
