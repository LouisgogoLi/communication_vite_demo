<template>
  <div ref="getChildEchartDOM1" :style="{ width: '900px', height: '300px' }"></div>
  <div ref="getChildEchartDOM2" :style="{ width: '600px', height: '300px' }"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// 引入 echarts 核心模塊，核心模塊提供了 echarts 使用必需要的接口。
import * as echarts from 'echarts/core';
// 引入Line圖表，Pie圖表，圖表後綴都為 Chart
import { LineChart, PieChart } from 'echarts/charts';
// 引入提示框，標題，直角坐標系，數據集，内置數據轉換器組件，組件後綴都為 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from 'echarts/components';
// 標籤自動布局，全局過度動畫等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必需的一步
import { CanvasRenderer } from 'echarts/renderers';

// 註冊必需的組件
echarts.use([
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const getChildEchartDOM1 = ref(null);
const getChildEchartDOM2 = ref(null);
let echart1 = echarts;
let echart2 = echarts;

onMounted(() => {
  initChart1();
  initChart2();
});

const initChart1 = () => {
  let chart = echart1.init(getChildEchartDOM1.value);
  // 把配置和数据放这里
  chart.setOption({
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    tooltip: {
      trigger: 'axis',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: 'line',
        smooth: true,
      },
    ],
  });
  window.onresize = function () {
    //自適應大小
    chart.resize();
  };
};

const initChart2 = () => {
  let chart = echart2.init(getChildEchartDOM2.value);
  // 把配置和数据放这里
  chart.setOption({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  });
  window.onresize = function () {
    //自適應大小
    chart.resize();
  };
};
</script>

<style scoped></style>
