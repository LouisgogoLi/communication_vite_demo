<template>
  <div>
    <h2>pinia reactive test list</h2>
    <button @click="fnNewList()">給reactive list 塞值</button>
    <button @click="fnDeleteList()">給reactive list 清空</button>
    <ul>
      <li v-for="(list, idx) in common.myObject.list" :key="list.id" v-show="list.show">
        {{ idx + 1 }}. {{ list.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common';

const common = useCommonStore();

const fnNewList = () => {
  common.myObject.list = [
    { id: '0001', name: '測試Vue陣列1', show: true },
    { id: '0002', name: '測試Vue陣列2', show: false },
    { id: '0003', name: '測試Vue陣列3', show: true },
    { id: '0004', name: '測試Vue陣列4', show: true },
    { id: '0005', name: '測試Vue陣列5', show: false },
  ];
};

const fnDeleteList = () => {
  common.myObject.list = [];
};
</script>

<style lang=""></style>
