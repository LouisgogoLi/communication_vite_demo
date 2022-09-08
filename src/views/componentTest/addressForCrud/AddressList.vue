<template>
  <div>
    <el-table :data="oTwAddress.addressList" width="500px">
      <el-table-column prop="sZip" label="郵遞區號" width="180" />
      <el-table-column prop="wholeAddress" label="地址" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AddressList",
};
</script>

<script setup>
import { onMounted, reactive } from "vue";

const oTwAddress = reactive({ addressList: [] });

onMounted(() => {
  window.addEventListener("message", (e) => {
    if (e.data.acrossPages) {
      oTwAddress.addressList = e.data.addressList;
      oTwAddress.addressList.forEach((item, index) => {
        oTwAddress.addressList[index].wholeAddress =
          item.sCity + item.sArea + item.sAddress;
      });
    }
  });
});
</script>

<style scoped></style>
