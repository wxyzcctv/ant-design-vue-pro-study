function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [10, 20, 30, 40, 50, 60];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
// 这个文件是配置的mock文件,这个mock文件就是为了能将接口代理过来时进行在mock中配置
