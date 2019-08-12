import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import VueI18n from "vue-i18n";
// 这里引入了一个国际化的插件，首先需要安装一下这个插件，npm install vue-i18n
import zhCN from "./locale/zhCN";
import enUS from "./locale/enUS";
import queryString from "query-string";

import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n);
Vue.component("Authorized", Authorized);
// 这里注册组件的时候不用use，而是使用component
Vue.use(Auth);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  // 这是去取URL中的locale，如果没有就默认为中文
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
  // 这里是配置的语言包，包含了中文和英文
});
// 这里是提供一个默认的语言，但是这个默认的语言是到URL中去取的，需要额外的一个第三方库去解析，query-string

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1345097_5l8dfb6qqhb.js" // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
