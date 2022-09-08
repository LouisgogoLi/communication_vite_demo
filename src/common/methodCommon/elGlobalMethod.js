import { ElLoading } from "element-plus";

let loadingCount = 0;
let loading;

const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: "測試全域中...",
    background: "rgba(0, 0, 0, 0.5)",
  });
};
const endLoading = () => {
  loading.close();
};
//顯示全局loading
export const showElLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};
//關閉全局loading
export const hideElLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
