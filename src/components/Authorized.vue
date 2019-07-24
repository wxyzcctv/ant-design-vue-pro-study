<script>
import { check } from "../utils/auth";
export default {
  functional: true,
  // 函数式组件
  props: {
    authority: {
      type: Array,
      required: true
      // 类型是数组，是必须传递的一个属性
    }
  },
  // render函数提供两个参数，第一个是createElement，第二个是context
  render(h, context) {
    // 可以从context中取出props和scope两个属性，其中Slot会在2.6版本中挂载到scopedSlots中，不用再去区分作用域插槽和域名插槽
    const { props, scopedSlots } = context;
    // 校验传递回来的authority，如果校验成功就返回插槽，也就是子组件，如果不通过就返回null
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
// 将这个组件注册为全局组件，在main.js中进行注册
</script>
