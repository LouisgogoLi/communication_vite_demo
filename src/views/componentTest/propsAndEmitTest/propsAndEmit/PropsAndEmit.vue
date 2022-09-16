<template>
  <div>
    <TitleBar :propsHandListShow="fnHandListShow" />
    <ListItem :propsIsOpen="isOpen" />
    <EmitTest @emitTestNumber="fnEmitTestNumber" />
    <TimerBox @emitTimerNumber="fnTimerNumber" />
    <DomRefTest ref="getChildDomRefTest" />
  </div>
</template>

<script setup>
import TitleBar from '@/components/componentTest/propsAndEmitTest/propsAndEmit/TitleBar.vue';
import ListItem from '@/components/componentTest/propsAndEmitTest/propsAndEmit/ListItem.vue';
import EmitTest from '@/components/componentTest/propsAndEmitTest/propsAndEmit/EmitTest.vue';
import TimerBox from '@/components/componentTest/propsAndEmitTest/propsAndEmit/TimerBox.vue';
import DomRefTest from '@/components/componentTest/propsAndEmitTest/propsAndEmit/DomRefTest.vue';
import { ref, onMounted } from 'vue';

const isOpen = ref(true);

const fnHandListShow = () => {
  isOpen.value = !isOpen.value;
};

const fnEmitTestNumber = (num) => {
  console.log(num.value);
};

const fnTimerNumber = (num) => {
  console.log('Time is over..', num.value);
};

const getChildDomRefTest = ref(null);

onMounted(() => {
  console.log(getChildDomRefTest.value.conts);
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
