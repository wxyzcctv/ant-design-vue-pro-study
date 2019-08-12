<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
// 导入两个语言包，中文和英文的
import moment from "moment";
// 导入日历
export default {
  data() {
    return {
      locale: zhCN
    };
  },
  watch: {
    // 通过路由挂在语言的配置项
    "$route.query.locale": function(val) {
      this.locale = val === "enUS" ? enUS : zhCN;
      moment.locale(val === "enUS" ? "en" : "zh-cn");
      // 将moment中的语言都打包
    }
  }
};
</script>
<style lang="less"></style>
