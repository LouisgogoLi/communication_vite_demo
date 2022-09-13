import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { createTestingPinia } from '@pinia/testing';
import { useCommonStore } from '@/stores/common';
import i18n from '@/i18n.js';

describe('HomeView.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            plugins: [useCommonStore],
          }),
          i18n,
        ],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
