import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

beforeAll(() => {
  console.log('1. 全域 beforeAll ：全域的第一個順序執行');
});
beforeEach(() => {
  console.log('2. 8. 14. 全域 beforeEach ：每次測試前都會執行，優先度大於區域的');
});
afterAll(() => {
  console.log('20. 全域 afterAll ：全域的最後一個順序執行');
});
afterEach(() => {
  console.log('7. 13. 19. 全域 afterEach ：每次測試後都會執行，優先度低於區域的');
});

describe('HelloWorld.vue測試區域1', () => {
  beforeEach(() => {
    console.log('3. 區域 beforeEach ：每次測試前都會執行，優先度低於全域的');
  });
  afterEach(() => {
    console.log('6. 區域 afterEach ：每次測試後都會執行，優先度大於全域的');
  });

  it('renders props.msg when passed', () => {
    console.log('4. 進入1');
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
    console.log('5. 斷言1');
  });
});

describe('測試區域2', () => {
  beforeEach(() => {
    console.log('9. 15. 區域 beforeEach ：每次測試前都會執行，優先度低於全域的2');
  });
  afterEach(() => {
    console.log('12. 18. 區域 afterEach ：每次測試後都會執行，優先度大於全域的2');
  });

  it('測試最小單位1', () => {
    console.log('10. 進入2');
    console.log('11. 斷言2');
  });
  it('測試最小單位2', () => {
    console.log('16. 進入3');
    console.log('17. 斷言3');
  });
});
