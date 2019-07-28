<template>
  <div ref="chartDom" style="height:400px;"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  // 通过debouch函数进行防抖操作，这里的resize是经过create函数中防抖处理后的resize
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(this.$refs.chartDom);
    // 一旦监听到了dom元素的大小发生了变化，就执行resize函数
    addListener(this.$refs.chartDom, this.resize);

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(option);
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
    }
    // 这里定义了resize函数是将图表进行从新的规范大小
  }
};
</script>

<style></style>
