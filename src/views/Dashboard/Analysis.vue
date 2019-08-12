<template>
  <div>
    {{ $t("message")["app.dashboard.analysis.timeLabel"] }}
    <!-- 这里就是使用的语言包里面的值来进行显示的 -->
    <a-date-picker></a-date-picker>
    <Chart :option="this.chartOption" style="height:400px" />
  </div>
</template>

<script>
import request from "../../utils/request.js";
import Chart from "../../components/Chart";
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      chartOption: {
        // title: {
        //   text: "ECharts 入门示例"
        // },
        // tooltip: {},
        // legend: {
        //   data: ["销量"]
        // },
        // xAxis: {
        //   data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        // },
        // yAxis: {},
        // series: [
        //   {
        //     name: "销量",
        //     type: "bar",
        //     data: [5, 20, 36, 10, 10, 20]
        //   }
        // ]
      }
    };
  },
  components: {
    Chart
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  // 每次使用过后就消除这个定时器,不然很耗性能
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getChartData() {
      request({
        url: "api/dashboard/chart",
        methods: "get",
        params: { id: "12345" }
      }).then(response => {
        this.chartOption = {
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
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>

<style></style>
