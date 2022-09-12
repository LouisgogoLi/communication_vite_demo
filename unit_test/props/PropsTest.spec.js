import { shallowMount } from '@vue/test-utils';
import PropsTest from '@/components/componentTest/propsAndEmitTest/propsApp/PropsTest.vue';

describe('測試PropsTest元件', () => {
  it('測試props會不會通過', () => {
    const wrapper = shallowMount(PropsTest, {
      props: { propsTestName: '這是我從測試傳的props訊息' },
    });
    expect(wrapper.get('[data-test="propsTestName"]').text()).toBe('這是我從測試傳的props訊息');
  });
});
