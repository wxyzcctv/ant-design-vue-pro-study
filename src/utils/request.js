import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  // 这里就是将axios进行了封装，封装为了request函数，这个函数的参数就是传递的axios请求的参数，
  // 包括url，methods，params等，一旦成功就是then，一旦失败就是catch。
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      // 失败之后可以通过response得到错误的信息，其中的错误信息包含了错误码和错误描述
      // 并且可以定义一个错误提示
      const {
        response: { status, statusText }
      } = error;

      // （下面的错误提示信息是已经被打包好的了，如果想要对里面的错误提示信息进行样式的改变的话需要使用到vue的rander函数，
      // 也可以使用jsx，这里使用的就是jsx，主要的使用方式可以参考https://github.com/vuejs/jsx）
      notification.error({
        //   加上下面一句注释就表示对于注释下面的一句话不做eslint的格式判断
        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误 <span style="color: red">{status}</span> : url{options.url}
          </div>
        ),
        // message: status,(如果不使用jsx的时候上面的显示就是这一句，上面可以算是jsx的一个使用方式)
        description: statusText
      });

      //   下面这一句是为了让出现错误的时候不在进入调用request函数时后面的then的逻辑，在Analysis中的request有一个then
      //   如果在request的时候出席了错误就不会进入then中
      return Promise.reject(error);
    });
}
export default request;
