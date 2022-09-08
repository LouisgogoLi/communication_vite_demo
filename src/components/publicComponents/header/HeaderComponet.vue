<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <template v-for="item in header" :key="item.tab_id">
        <el-menu-item
          :index="item.router_name"
          v-if="item.List.length === 0"
          :disabled="!item.click"
          >{{ item.name }}</el-menu-item
        >
        <el-sub-menu :index="item.router_name" v-else>
          <template #title>{{ item.name }}</template>
          <template v-for="secondItem in item.List" :key="secondItem.tab_id">
            <el-menu-item
              :index="secondItem.router_name"
              v-if="secondItem.List.length === 0"
              :disabled="!secondItem.click"
              >{{ secondItem.name }}</el-menu-item
            >
            <el-sub-menu :index="secondItem.router_name" v-else>
              <template #title>{{ secondItem.name }}</template>
              <template
                v-for="thirdItem in secondItem.List"
                :key="thirdItem.tab_id"
              >
                <el-menu-item
                  :index="thirdItem.router_name"
                  :disabled="!thirdItem.click"
                  >{{ thirdItem.name }}</el-menu-item
                >
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HeaderComponet",
};
</script>

<script setup>
import header from "@/api/json/publicJson/header.json";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

import { computed } from "vue";
const activeIndex = computed(() => {
  return route.name;
});

const handleSelect = (key) => {
  router.push({ name: key });
};
</script>

<style scoped></style>
