<template>
  <div>
    <el-table :data="twAddress.addressList" width="500px">
      <el-table-column prop="sZip" label="郵遞區號" width="180" />
      <el-table-column prop="wholeAddress" label="地址" />
    </el-table>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const twAddress = reactive({ addressList: [] });

onMounted(() => {
  window.addEventListener('message', (e) => {
    if (e.data.acrossPages) {
      twAddress.addressList = e.data.addressList;
      twAddress.addressList.forEach((item, index) => {
        twAddress.addressList[index].wholeAddress = item.sCity + item.sArea + item.sAddress;
      });
    }
  });
});
</script>

<style scoped></style>
