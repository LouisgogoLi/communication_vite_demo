import { mount } from '@vue/test-utils';
import TimerBox from '@/components/componentTest/propsAndEmitTest/propsAndEmit/TimerBox.vue';
import { nextTick } from 'vue';

describe('測試TimerBox元件', () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Replaces global timer functions. legacy to works setInterval return value mocks.
  });
  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });
  it('測試TimerBox元件,emit傳值是否正確', async () => {
    const wrapper = mount(TimerBox, {});
    await nextTick();
    vi.advanceTimersByTime(5000); //提前時間
    expect(wrapper.emitted()).toHaveProperty('emitTimerNumber');
    expect(wrapper.emitted('emitTimerNumber')[0][0].value).toBe(0);
  });
});
