<template>
  <div>
    <button @click="fnTestJquery()">測試jquery是否加入功能顯示隱藏</button>
    <ul class="hidetest">
      <li>5</li>
      <li>4</li>
      <li>3</li>
      <li>2</li>
      <li>1</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script setup>
const $ = window.$;
const fnTestJquery = () => {
  $('.hidetest').toggle();
};
</script>

<style scoped></style>
