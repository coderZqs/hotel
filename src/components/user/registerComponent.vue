<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" size="mini">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="rspassword">
      <el-input type="password" v-model="ruleForm.rspassword"></el-input>
    </el-form-item>
    <el-form-item label="号码" prop="phonenumber">
      <el-input type="text" v-model="ruleForm.phonenumber"></el-input>
    </el-form-item>
    <el-form-item>
      <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
      <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
    </el-form-item>
    <el-form-item>
      <p>请移动到{{posRight}}的位置上</p>
      <el-slider
        @change="change"
        :step="10"
        v-model="pos"
        :show-tooltip="sliderSetting.isShowToolTip"
        :show-stops="sliderSetting.isShowstops"
      ></el-slider>
    </el-form-item>
    <el-form-item>
      <el-button
        size="medium"
        style="width:100%"
        type="button"
        :disabled="isRegister"
        @click="submit"
      >提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("rspassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isRegister: true,
      pos: 0,
      posRight: 0,
      sliderSetting: {
        isShowToolTip: false,
        step: 10,
        isShowstops: true
      },
      ruleForm: {
        username: "",
        password: "",
        rspassword: "",
        radio: "",
        phonenumber: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 1, max: 8, message: "长度必须为1到8之间", trigger: "blur" }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        rspassword: [{ validator: validatePass2, trigger: "blur" }],
        phonenumber: [
          { required: true, message: "必填项", trigger: "blur" },
          { min: 11, max: 11, message: "电话号码长度不正确", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.posRight = this.getRandom(10, 1);
  },
  methods: {
    getRandom(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    },
    change(e) {
      let pos = e / 10;
      console.log(this.isRegister);
      if (pos == this.posRight) {
        this.isRegister = false;
      }
    },
    async submit() {
      let keyArr = {
        username: "uname",
        password: "upwd"
      };
      var newForm = Object.keys(this.ruleForm).reduce((newData, key) => {
        let newkey = keyArr[key] || key;
        newData[newkey] = this[key];
        return newData;
      }, {});
      this.axios
        .put("/api/user", newForm)
        .then(res => {
          this.$emit("update:active", 3);
        })
        .catch(res => {
          let {
            status,
            data: { msg }
          } = res.response;
          this.$message.error(msg);
        });
      /* this.axios.get("/alqq/login?username=111&userpwd=zzz").then(res => {
        console.log(res);
      }); */
    }
  }
};
</script>

<style>
</style>
