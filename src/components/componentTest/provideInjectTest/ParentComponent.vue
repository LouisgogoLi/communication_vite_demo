<template>
  <ChildComponent />
</template>

<script>
export default {
  name: "ParentComponent",
};
</script>

<script setup>
import ChildComponent from "@/components/componentTest/provideInjectTest/ChildComponent.vue";
</script>

<style scoped></style>
