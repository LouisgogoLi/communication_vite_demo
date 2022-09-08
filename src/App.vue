<template>
  <el-config-provider :locale="localeElement">
    <div v-loading>
      <el-container>
        <el-header v-if="route.query.showUI === 'false' ? false : true">
          <HeaderComponet />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </el-config-provider>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import HeaderComponet from "@/components/publicComponents/header/HeaderComponet.vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { ref, computed, watch, onMounted } from "vue";
import zhTwElement from "element-plus/lib/locale/lang/zh-tw";
import enElement from "element-plus/lib/locale/lang/en";
const localeElement = ref(zhTwElement);
import { useStore } from "vuex";
const store = useStore();
const sLanguage = computed(() => {
  return store.getters.getLanguage;
});

const fnChangeLanguage = () => {
  if (sLanguage.value === "en") {
    localeElement.value = enElement;
  } else if (sLanguage.value === "zh_tw") {
    localeElement.value = zhTwElement;
  }
};

watch(
  () => sLanguage.value,
  () => {
    fnChangeLanguage();
  }
);

onMounted(() => {
  fnChangeLanguage();
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
