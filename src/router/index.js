import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/index.html',
    name: 'index',
    redirect: { name: 'Home' },
  },
  {
    path: '/componentTest/propsAndEmitTest/PropsApp',
    name: 'PropsApp',
    component: () => import('@/views/componentTest/propsAndEmitTest/propsApp/PropsApp.vue'),
  },
  {
    path: '/componentTest/propsAndEmitTest/PropsAndEmit',
    name: 'PropsAndEmit',
    component: () => import('@/views/componentTest/propsAndEmitTest/propsAndEmit/PropsAndEmit.vue'),
  },
  {
    path: '/componentTest/DirectiveTest',
    name: 'DirectiveTest',
    component: () => import('@/views/componentTest/directiveTest/DirectiveTest.vue'),
  },
  {
    path: '/componentTest/ProvideInjectTest',
    name: 'ProvideInjectTest',
    component: () => import('@/views/componentTest/provideInjectTest/ProvideInjectTest.vue'),
  },
  {
    path: '/componentTest/AddressForCrud',
    name: 'address_for_crud',
    component: () => import('@/views/componentTest/addressForCrud/AddressForCrud.vue'),
  },
  {
    path: '/componentTest/AddressForCrud/AddressList',
    name: 'address_list',
    component: () => import('@/views/componentTest/addressForCrud/AddressList.vue'),
    props: (route) => ({ showUI: route.query.showUI }),
  },
  {
    path: '/SlotTest',
    name: 'SlotTest',
    component: () => import('@/views/slotTest/SlotTest.vue'),
  },
  {
    path: '/SlotTest/slotElTable',
    name: 'SlotElTable',
    component: () => import('@/views/slotTest/slotElTable/SlotElTable.vue'),
  },
  {
    path: '/elementTest/tableView',
    name: 'tableView',
    component: () => import('@/views/elementTest/tableView/TableView.vue'),
  },
  {
    path: '/echartTest',
    name: 'echartTest',
    component: () => import('@/views/echartTest/EchartTest.vue'),
  },
  {
    path: '/unit_test/axios_mock',
    name: 'axios_mock',
    component: () => import('@/views/unit_test/axios_mock/AxiosMock.vue'),
  },
  {
    path: '/external/external_test',
    name: 'external_test',
    component: () => import('@/views/external/external_test/ExternalTest.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

import { showElLoading, hideElLoading } from '@/common/methodCommon/elGlobalMethod';

router.beforeEach(() => {
  showElLoading();
  setTimeout(() => {
    hideElLoading();
  }, 1000);
});

export default router;
