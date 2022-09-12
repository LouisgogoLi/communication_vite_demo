import { shallowMount } from '@vue/test-utils';
import ElTableDefault from '@/components/elementUIComponent/ElTableDefault.vue';
import ElementPlus from 'element-plus';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(ElTableDefault, {
    global: {
      plugins: [ElementPlus],
    },
  });
});

describe('測試element套件是否通過', () => {
  it('測試elementplus table是否抓的到', () => {
    console.log(wrapper.html());
    // console.log(wrapper.vm.tableData);
  });
});
