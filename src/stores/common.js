import { ref } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const language = ref("en");

  return { language };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
