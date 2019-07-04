<template>
  <div>
    <Header />
    <SiderMenu />
    <router-view></router-view>
    <!-- 这里的router-view是显示的就是仪表盘的主要显示内容 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style></style>
