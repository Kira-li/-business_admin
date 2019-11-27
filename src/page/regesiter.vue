<template>
    <div class="login-box">
    <div>
        <el-form
        :model= "ruleForm"
        :rules= "rules"
        ref="ruleforms"
        label-position="left"
        label-width="80px"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">注册</h3>
        <el-form-item prop="account" label="用户名">
          <el-input type="text" v-model="ruleForm.account" placeholder="登录账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="密码">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkRepass" label="确认密码">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="验证码">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item prop="inviteCode" label="邀请码">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="邀请码"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;" @click="login" :loading="logining">注册</el-button>
      </el-form>
    </div>
    </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      logining: false,
      ruleForm: {
        account: "",
        checkPass: "",
        checkRepass: "",
        phone: "",
        code: "",
        inviteCode: ""
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
    this.ruleForm.checkPass = "";
    if (localStorage.getItem('userName')) { // 记住密码操作
      this.ruleForm.account = localStorage.getItem('userName');
      this.ruleForm.checkPass = localStorage.getItem('password');
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
              userName: this.ruleForm.account,
              password: this.ruleForm.checkPass
            };
            sessionStorage.setItem("user", JSON.stringify(params)); // session存储用户信息
            this.logining = false;
            this.$router.push({ path: "/menu1/sub1" }); // 去主页
          }, 1000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>
