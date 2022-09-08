<template>
  <ParentComponent />
</template>

<script>
export default {
  name: "ProvideInjectTest",
};
</script>

<script setup>
import ParentComponent from "@/components/componentTest/provideInjectTest/ParentComponent.vue";
import { provide, ref, reactive, readonly } from "vue";

const sLocation = ref("North Pole");
const oGeolocation = reactive({
  longitude: 90,
  latitude: 135,
});
const fnUpdateLocation = () => {
  sLocation.value = "hahaha";
};
provide("provideLocation", readonly(sLocation));
provide("provideGeolocation", readonly(oGeolocation));
provide("provideUpdateLocation", fnUpdateLocation);
</script>

<style scoped></style>
