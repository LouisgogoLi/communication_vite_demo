<template>
  <div>
    <img class="loading" v-if="!isLoad" src="@/assets/gif/load.gif" alt="" />
    <h1 v-if="errorLog">ERROR: {{ errorLog }}</h1>
    <div class="imgBlock" v-if="isLoad">
      <img v-for="item in fetchData.data" :key="item.url" :src="item.url" alt="" />
    </div>
  </div>
</template>

<script setup>
import { apiGetHerokuappImageList } from '@/api/axios/publicAxios/publicAxios.js';
import { ref, reactive, onMounted } from 'vue';

const fetchData = reactive({ data: [] });
const isLoad = ref(false);
const errorLog = ref('');

const getData = async () => {
  try {
    const imageListItem = await apiGetHerokuappImageList();
    isLoad.value = true;
    fetchData.data = imageListItem.data;
  } catch (err) {
    isLoad.value = true;
    errorLog.value = err.message;
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
