<template>
  <PropsTest
    :propsTestName="testTime"
    :propsBool="bool"
    :propsPay="pay"
    :propsDate="date"
    :propsArr="arr"
    :propsObj="obj"
    :propsMyName="fnMyName"
  />
</template>

<script setup>
import PropsTest from "@/components/componentTest/propsAndEmitTest/propsApp/PropsTest.vue";
import { ref, reactive } from "vue";

const testTime = ref("Hello Louis");
const bool = ref(true);
const pay = ref(12345);
const date = ref(new Date());
const arr = reactive([]);
const obj = reactive({});
const fnMyName = () => {};
</script>

<style scoped></style>
