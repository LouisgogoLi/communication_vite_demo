<template>
  <div>
    <SlotsTitle>Louis</SlotsTitle>
    <SlotsTitle>Mike</SlotsTitle>
    <SlotsTitle>Tedy</SlotsTitle>
    <SlotDemo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/logo.png" alt="" />
        <p class="colorRed">A paragraph for the main content.</p>
        <p class="colorRed">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </SlotDemo>
    <SlotDemo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/logo.png" alt="" />
        <p class="colorYellow">我這邊換了黃色</p>
        <p class="colorYellow">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </SlotDemo>
    <SlotDemo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/bright.jpg" alt="" />
        <p class="colorRed">我這邊換了圖</p>
        <p class="colorRed">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </SlotDemo>
  </div>
</template>

<script setup>
import SlotsTitle from "@/components/slotTest/SlotsTitle.vue";
import SlotDemo from "@/components/slotTest/SlotDemo.vue";
</script>

<style scoped>
.colorRed {
  color: red;
}
.colorYellow {
  color: yellow;
}
img {
  height: 30px;
  width: 30px;
}
</style>
