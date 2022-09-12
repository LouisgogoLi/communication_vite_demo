import { shallowMount } from '@vue/test-utils';
import EmitTest from '@/components/componentTest/propsAndEmitTest/propsAndEmit/EmitTest.vue';

describe('測試EmitTest元件', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EmitTest, {});
  });
  it('測試EmitTest元件,emit傳值是否正確', () => {
    expect(wrapper.emitted()).toHaveProperty('emitTestNumber');
    expect(wrapper.emitted('emitTestNumber')[0][0].value).toBe(54088);
  });
});
