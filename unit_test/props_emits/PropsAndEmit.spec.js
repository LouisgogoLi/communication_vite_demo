import { mount } from '@vue/test-utils';
import PropsAndEmit from '@/views/componentTest/propsAndEmitTest/propsAndEmit/PropsAndEmit.vue';

describe('測試PropsAndEmit元件', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PropsAndEmit, {});
  });
  it('測試TitleBar元件click是否正常觸發', async () => {
    expect(wrapper.vm.isOpen).toBe(true);
    await wrapper.find('[data-test="titlebar_title"]').trigger('click');
    expect(wrapper.vm.isOpen).toBe(false);
    await wrapper.find('[data-test="titlebar_title"]').trigger('click');
    expect(wrapper.vm.isOpen).toBe(true);
  });
});
