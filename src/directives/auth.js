import { check } from "../utils/auth";

// 这里就是自定义一个指令
function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    // 指令的名称用户可自己设置，默认为auth
    inserted(el, binding) {
      // 在inserted周期中进行权限的校验
      if (!check(binding.value)) {
        // 如果没有校验通过将该元素从DOM节点中移除掉
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
