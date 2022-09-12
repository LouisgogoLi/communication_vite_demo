<template>
  <ParentComponent />
</template>

<script setup>
import ParentComponent from '@/components/componentTest/provideInjectTest/ParentComponent.vue';
import { provide, ref, reactive, readonly } from 'vue';

const location = ref('North Pole');
const geolocation = reactive({
  longitude: 90,
  latitude: 135,
});
const fnUpdateLocation = () => {
  location.value = 'hahaha';
};
provide('provideLocation', readonly(location));
provide('provideGeolocation', readonly(geolocation));
provide('provideUpdateLocation', fnUpdateLocation);
</script>

<style scoped></style>
