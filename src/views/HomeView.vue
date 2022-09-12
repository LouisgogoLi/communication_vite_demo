<template>
  <select v-model="common.language">
    <option value="zh_tw">中文</option>
    <option value="en">English</option>
    <option value="ja">日本語</option>
  </select>
  <div class="home">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/svg/logo.svg"
      width="125"
      height="125"
    />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { useI18n } from "vue-i18n";
import { computed } from "vue";

import { useCommonStore } from "@/stores/common";
const common = useCommonStore();

const { t } = useI18n();
const msg = computed(() => t("message"));
</script>
