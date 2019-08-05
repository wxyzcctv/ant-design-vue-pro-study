function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { message: "OK" };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = form;
// 这个文件是配置的mock文件,这个mock文件就是为了能将接口代理过来时进行在mock中配置
