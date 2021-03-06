import router from "../../router";
import request from "../../utils/request";

const state = {
  step: {
    payAccount: "123456",
    reciverAccount: {
      type: "alipay",
      number: ""
    }
  }
  // 只有一个分布表单，这里只有一个付款账号，是为了方便理解的说
};

const actions = {
  async submitStepForm({ commit }, { payload }) {
    await request({
      url: "/api/form",
      method: "POST",
      data: payload
    });
    commit("saveStepFormData", { payload });
    // 提交mutations到后台保存下来的意思吧
    router.push("/form/step-form/result");
    // 完成之后跳转到最终结果的路由
  }
};

const mutations = {
  saveStepFormData(state, { payload }) {
    // 改变其中的state中的呢step值
    state.step = {
      ...state.step,
      ...payload
      // 取出其中已经有的值
    };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
