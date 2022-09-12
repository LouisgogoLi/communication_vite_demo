import { shallowMount } from '@vue/test-utils';
import ListItem from '@/components/componentTest/propsAndEmitTest/propsAndEmit/ListItem.vue';

describe('測試ListItem元件', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ListItem, {
      props: { propsIsOpen: false },
    });
  });
  it('測試ListItem元件,預設propsIsOpen傳false隱藏', () => {
    expect(wrapper.findAll('[data-test="list_test"]')).toHaveLength(0);
  });
  it('測試ListItem元件,propsIsOpen改成true結果', async () => {
    await wrapper.setProps({ propsIsOpen: true });

    expect(wrapper.props('propsIsOpen')).toEqual(true);
    expect(wrapper.findAll('[data-test="list_test"]')).toHaveLength(5);
  });
});
