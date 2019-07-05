<template>
  <div>
    <a-drawer placement="right" :closable="false" @close="onClose" :visible="visible">
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格</h2>
        <a-radio-group v-model="navThame">
          <a-radio value="darck">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航栏模式</h2>
        <a-radio-group v-model="navLayout">
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navThame: "darck",
      navLayout: "left"
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.handle {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 240px;
  right: 255px;
  background: #1890ff;
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 20px;
  border-radius: 3px, 0, 0, 3px;
}
</style>
