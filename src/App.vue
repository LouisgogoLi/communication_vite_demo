<template>
  <el-config-provider :locale="localeElement">
    <div v-loading>
      <el-container>
        <el-header v-if="route.query.showUI === 'false' ? false : true">
          <HeaderComponet />
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </div>
  </el-config-provider>
</template>

<script setup>
import HeaderComponet from "@/components/publicComponents/header/HeaderComponet.vue";

import zhTwElement from "element-plus/lib/locale/lang/zh-tw";
import enElement from "element-plus/lib/locale/lang/en";

import { useI18n } from "vue-i18n";
import { useRoute, RouterView } from "vue-router";
import { ref, watchEffect } from "vue";
import { useCommonStore } from "@/stores/common";
const common = useCommonStore();

const route = useRoute();

const localeElement = ref(enElement);

const { locale } = useI18n();
locale.value = common.language;

watchEffect(() => {
  console.log(common.language);
  locale.value = common.language;
  if (common.language === "en") {
    localeElement.value = enElement;
  } else if (common.language === "zh_tw") {
    localeElement.value = zhTwElement;
  }
});
</script>

<style lang="scss">
#app {
  text-align: center;
}

body,
input,
select {
  font-family: "Noto Sans TC", Helvetica, "微軟正黑體";
  line-height: 140%;
  font-weight: 400;
  color: #333;
  background-color: #f8fafb;
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-loading-mask.is-fullscreen {
  .el-loading-spinner {
    background: url("@/assets/gif/animated-love-image-0025.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px 100px;
    height: 100px;
    width: 100%;
    .circular {
      display: none;
    }
    .el-loading-text {
      margin: 100px 0;
      font-size: 16px;
      color: #f8fafb;
    }
  }
}
</style>
