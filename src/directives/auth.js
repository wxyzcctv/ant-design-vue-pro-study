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
// 权限式指令的方式的一个弊端就是一旦进行设置权限之后想要再改回来就改不回来了，
// 但是在一般的情况下，设置了权限之后是不会在改变的。
// 而组件式权限控制更加灵活，可以在设置权限时候进行改变，弊端就是写的代码可能会比较多
