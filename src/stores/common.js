import { ref, reactive, computed } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCommonStore = defineStore('common', () => {
  //語言
  const language = ref('en');

  //pinia vue圖片開關
  const isOpen = ref(false);
  function handSetOpen() {
    isOpen.value = !isOpen.value;
  }

  //pinia count 數字測試
  const count = ref(1);
  const doubleCount = computed(() => count.value * 2);

  //pinia vue測試陣列
  const myObject = reactive({
    list: [],
  });

  return { language, isOpen, handSetOpen, count, doubleCount, myObject };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
