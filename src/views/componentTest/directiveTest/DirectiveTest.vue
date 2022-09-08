<template>
  <div>
    <DirectiveDemo />
  </div>
</template>

<script setup>
import DirectiveDemo from "@/components/componentTest/directiveTest/DirectiveDemo.vue";
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
