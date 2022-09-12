import { shallowMount } from '@vue/test-utils';
import AddressForCrud from '@/views/componentTest/addressForCrud/AddressForCrud.vue';
import { createRouter, createWebHistory } from 'vue-router';

import { routes } from '@/router';

let router;
let wrapper;
beforeAll(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  router.push({ name: 'address_for_crud' });
  await router.isReady();

  wrapper = shallowMount(AddressForCrud, {
    global: {
      plugins: [router],
    },
  });
});

describe('測試address新增', () => {
  it('測試address原始是不是1列,測試原本刪除button是不存在的', () => {
    expect(wrapper.findAll('[data-test="addressList"]')).toHaveLength(1);
    expect(wrapper.find('[data-test="address_delete"]').exists()).toBe(false);
  });
  it('測試address按新增button後有沒有成功變成2列', async () => {
    await wrapper.findAll('[data-test="address_add"]')[0].trigger('click');
    expect(wrapper.findAll('[data-test="addressList"]')).toHaveLength(2);
  });
});
describe('測試第二列city,area,detail,值是否正常傳送', () => {
  it('測試city,area change後值是否正確', async () => {
    await wrapper.findAll('[data-test="address_city"]')[1].setValue('台中市');
    await wrapper.findAll('[data-test="address_city"]')[1].trigger('change');
    expect(wrapper.findAll('[data-test="address_city"]')[1].element.value).toBe('台中市');

    await wrapper.findAll('[data-test="address_area"]')[1].setValue('太平區');
    await wrapper.findAll('[data-test="address_area"]')[1].trigger('change');
    expect(wrapper.findAll('[data-test="address_area"]')[1].element.value).toBe('太平區');

    await wrapper.findAll('[data-test="address_detail"]')[1].setValue('中山路一段22號');
    expect(wrapper.findAll('[data-test="address_detail"]')[1].element.value).toBe('中山路一段22號');
  });
});
describe('點擊表單送出', () => {
  it('測試表單送出驗證是否出現', async () => {
    await wrapper.get('[data-test="address_summit"]').trigger('click');
    expect(wrapper.findAll('[data-test="address_errorCity"]')[0].exists()).toBe(true);
    expect(wrapper.findAll('[data-test="address_errorCity"]')[0].text()).toBe('請選擇縣市');
    expect(wrapper.findAll('[data-test="address_errorArea"]')[0].exists()).toBe(true);
    expect(wrapper.findAll('[data-test="address_errorArea"]')[0].text()).toBe('請選擇區域');
    expect(wrapper.findAll('[data-test="address_errorAddress"]')[0].exists()).toBe(true);
    expect(wrapper.findAll('[data-test="address_errorAddress"]')[0].text()).toBe('請輸入詳細地址');
  });
  it('測試第一列地址驗證地址字數沒5以上是否會跳出驗證提醒', async () => {
    await wrapper.findAll('[data-test="address_detail"]')[0].setValue('測試');
    await wrapper.get('[data-test="address_summit"]').trigger('click');
    expect(wrapper.findAll('[data-test="address_errorAddress"]')[0].text()).toBe('地址字數為5以上');
  });
  it('測試第一列地址更換city是否會清空地址Detail與驗證', async () => {
    await wrapper.findAll('[data-test="address_city"]')[0].setValue('桃園縣');
    await wrapper.findAll('[data-test="address_city"]')[0].trigger('change');
    expect(wrapper.vm.twAddress.addressList[0].sErrorAddressMessage).toBe('');
  });
});
