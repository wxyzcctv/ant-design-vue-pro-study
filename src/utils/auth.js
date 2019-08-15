// const currentAuth = ["admin"];
// export { currentAuth };

// export function getCurrentAuthority() {
//   return currentAuth;
// }
// // 这里是定一个获取权限的函数，本来是该向后端获取的，这里就做了一个假的权限

// export function check(authority) {
//   const current = getCurrentAuthority();
//   return current.some(item => authority.includes(item));
//   // some表示数组current中是否有满足括号中函数的元素，如果current是中有元素包含了authority，那么就返回true或者false
// }
// // 以上是做校验的，传入的是一个权限，这个权限就是需要校验的

// export function isLogin() {
//   const current = getCurrentAuthority();
//   return current && current[0] !== "guest";
// }
// // 设置登录权限，当有前权限，当前权限中不是guest的时候就返回一个true，就通过，能正常登录
const currentAuth = ["admin"];
export { currentAuth };

export function getCurrentAuthority() {
  return currentAuth;
}

export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}

export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
