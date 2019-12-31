<template>
  <div class="login-box">
    <div class="login-page-container">
      <el-form
        :model= "ruleForm"
        :rules= "rules"
        ref="ruleforms"
        label-position="left"
        label-width="70px"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account" label="用户名">
          <el-input type="text" v-model="ruleForm.account" placeholder="登录账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="密码">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="登录密码"></el-input>
        </el-form-item>
        <div style="height:40px" class="check_pwd">
          <el-checkbox click="remberuser" v-model="checked" checked class="remember" style="height:40px">记住密码</el-checkbox>
          <!--<span class="find_pwd" @click="findPwd">密码</span>-->
          <span class="find_pwd" @click="regesiter" style="margin-right:20px">账号注册</span>
        </div>
        <el-button type="primary" style="width:100%;" @click="login" :loading="logining">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import * as commonApi from "api/common";
import * as types from "../store/mutation-types";
import ajaxMy from "@/config/request.js";
export default {
  props: {},
  data () {
    return {
      logining: false,
      ruleForm: {
        account: "",
        checkPass: ""
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入登录账号",
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            message: "请输入登录密码",
            trigger: "blur"
          }
        ]
      },
      checked: true
    };
  },
  created () {
    this.checked = localStorage.getItem('pwdChecked') === 'true';
    this.ruleForm.checkPass = "";
    if (this.checked) { // 记住密码操作
      this.ruleForm.account = localStorage.getItem("SET_USERNAME");
      this.ruleForm.checkPass = localStorage.getItem("SET_PASSWORD");
    }
  },
  methods: {
    regesiter () {
      this.$router.push({ path: "/regesiter" });
    },
    findPwd () {
      this.$router.push({ path: "/changepwd" });
    },
    login () {
      this.$refs.ruleforms.validate(valid => {
        if (valid) {
          this.logining = true;
          // 模拟登录
          setTimeout(() => {
            const params = {
              username: this.ruleForm.account,
              password: this.ruleForm.checkPass,
              timeout: 60 * 60
            };
            ajaxMy.post("/api/v1/user/login", params).then((res) => {
              if (res.data.code === "200") {
                localStorage.setItem("pwdChecked", JSON.stringify(this.checked)); // 记住密码
                localStorage.setItem("SET_USERNAME", JSON.stringify(this.ruleForm.account));
                localStorage.setItem("SET_PASSWORD", JSON.stringify(this.ruleForm.checkPass));
                sessionStorage.setItem("user", JSON.stringify(params)); // session存储用户信息
                sessionStorage.setItem("AUTH_TOOKEN", res.headers.authorization); // session存储用户信息
                this.logining = false;
                this.$router.push({ path: "/index/home" }); // 去主页
              } else {
                this.logining = false;
                this.$message({
                    message: res.data.message,
                    type: 'error'
                });
              }
            });
          }, 1000);
        } else {
          return false;
        }
      });
    },
    ...mapMutations({
      setUsername: types.SET_USERNAME,
      setPassword: types.SET_PASSWORD,
      setTreeData: types.SET_TREEDTA,
      setToken: types.SET_TOKEN
    })
  }
};
</script>

<style lang="scss">
@import "../assets/css/them.scss";
.login-box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: $globalBgColor;
}
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
  margin: 0px 0px 35px 0px;
}
.check_pwd {
  .el-checkbox {
    float: left;
  }
  .find_pwd {
    float: right;
    color: #409EFF;
  }
}
</style>
