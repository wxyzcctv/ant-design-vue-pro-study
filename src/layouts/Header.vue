<template>
  <div class="header">
    <a-dropdown>
      <a-icon type="global" />
      <a-menu
        slot="overlay"
        @click="localeChange"
        :selectedKeys="[$route.query.locale || 'zhCN']"
      >
        <a-menu-item key="zhCN">
          中文
        </a-menu-item>
        <a-menu-item key="enUS">
          English
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    localeChange({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
      // 一旦点击了对应的国际化对应的选项，就对路由的query进行改变
      this.$i18n.locale = key;
      // 将路由中获取到的值赋给i18n实例，就能更具url中传递的信息进行切换中英文了
    }
  }
};
</script>

<style>
.header {
  float: right;
  margin-right: 30px;
}
</style>
