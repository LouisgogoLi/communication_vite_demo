<template>
  <PropsTest
    :propsTestName="sTestName"
    :propsBool="bBool"
    :propsPay="nPay"
    :propsDate="dDate"
    :propsArr="aArr"
    :propsObj="oObj"
    :propsMyName="fnMyName"
  />
</template>

<script>
export default {
  name: "PropsApp",
};
</script>

<script setup>
import PropsTest from "@/components/componentTest/propsAndEmitTest/propsApp/PropsTest.vue";
import { ref, reactive } from "vue";

const sTestName = ref("Hello Louis");
const bBool = ref(true);
const nPay = ref(12345);
const dDate = ref(new Date());
const aArr = reactive([]);
const oObj = reactive({});
const fnMyName = () => {};
</script>

<style scoped></style>
