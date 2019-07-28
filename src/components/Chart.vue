<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      stype: Object,
      default: () => {}
    }
  },
  watch: {
    // option(val) {
    //   this.chart.setOption(val);
    // }
    // 这里通过监听函数watch来监听option的值的变化,一旦option发生了变化就会将,就从新渲染传入的option的值,
    // 但是这个时候监听的是option整体的值,而不是其中某个数组的值,如果要进行监听option内层数组的值的变化,需要进行的是深度监听
    // 以下是深度监听的写法,但是深度监听有一个很大的弊端就是非常的耗浏览器的性能,而且对于chart来说数据量可能会非常的大
    option: {
      handler(val) {
        this.chart.setOption(val);
      },
      deep: true
    }
  },
  // 通过debouch函数进行防抖操作，这里的resize是经过create函数中防抖处理后的resize
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    // 一旦监听到了dom元素的大小发生了变化，就执行resize函数
    addListener(this.$refs.chartDom, this.resize);
    this.renderChart();
  },
  beforeDestroy() {
    // 生命周期销毁的时候需要将Dom节点从新规范大小，于此同时还需要将定义的chart进行销毁，防止内存泄漏
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      // 这个时候通过打日志的形式可以看出这里在销毁和创建的时候会多次执行这个函数，这个时候就需要使用防抖
      console.log("resize");
      this.chart.resize();
    },
    // 这里定义了resize函数是将图表进行从新的规范大小
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.option);
      //   这里是通过父组件将this.option的内容传递进来
    }
  }
};
</script>

<style></style>
