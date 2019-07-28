<template>
  <div>
    <Chart :option="this.chartOption" style="height:400px" />
  </div>
</template>

<script>
import random from "lodash/random";
import Chart from "../../components/Chart";
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      chartOption: {
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
      }
    };
  },
  components: {
    Chart
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => random(100)
        // 这里的意思是将数组中的所有的数进行从新的排列,从新排列后的数是在100以内的
      );
      this.chartOption = { ...this.chartOption };
      // 这一行代码就是将改变过后的值赋给新的量,这个量就可以在子组件中不通过深度监听实现而实现变量的更新
    }, 3000);
  },
  // 每次使用过后就消除这个定时器,不然很耗性能
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
