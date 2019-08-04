<template>
  <div>
    <a-form :layout="formLayout" :form="form">
      <a-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-radio-group
          default-value="horizontal"
          @change="handleFormLayoutChange"
        >
          <a-radio-button value="horizontal">
            Horizontal
          </a-radio-button>
          <a-radio-button value="vertical">
            Vertical
          </a-radio-button>
          <a-radio-button value="inline">
            Inline
          </a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="Field A"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <!-- 下面的input中使用v-decorator替换v-model，传入的是数组形式，第一个是传入的数组，第二个是传入的初始字段和规则 -->
        <a-input
          v-decorator="[
            'fieldA',
            {
              initialValue: fieldA,
              rules: [{ required: true, min: 6, message: '必须大于5个字符' }]
            }
          ]"
          placeholder="input placeholder"
        />
      </a-form-item>
      <a-form-item
        label="Field B"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input v-decorator="['fieldB']" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="handleSubmit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    // 这一句是为了进行自动校验
    return {
      formLayout: "horizontal",
      fieldA: "hello",
      fieldB: ""
    };
  },
  mounted() {
    // 通过mounted生命周期的钩子函数实现传递到这个页面的中的数据进行渲染,这里进行渲染的时候延时了三秒
    setTimeout(() => {
      this.form.setFieldsValue({ fieldA: "hello world" });
    }, 3000);
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit() {
      // 获取到校验通过的值,通过this.form.validateFields得到，其中传入的第一个参数是错误信息，第二参数是值
      // 如果没有错误信息，表示校验通过，那么就打印出传递回来的值
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          // 如果校验通过之后就将校验通过后需要提交的值复制到Object中的this进行提交，这里的this就是这个页面传递的值
          Object.assign(this.value);
        }
      });
    }
  }
};
</script>
