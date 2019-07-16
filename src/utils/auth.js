export function getCurrentAuthority() {
  return ["admin"];
}
// 这里是定一个获取权限的函数，本来是该向后端获取的，这里就做了一个假的权限
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.include(item));
  // some表示数组current中是否有满足括号中函数的元素，如果current是中有元素包含了authority，那么就返回这个元素
}

export function isLoging() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
// 设置登录权限，当current存在且不等于guest的时候就允许登录
