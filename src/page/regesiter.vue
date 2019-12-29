<template>
    <div class="login-box">
        <el-form
        :model= "ruleForm"
        :rules= "rules"
        ref="ruleforms"
        label-position="left"
        label-width="80px"
        class="regesiter-container"
      >
      <el-button type="primary" size="mini" icon="el-icon-back" class="back" @click="goBack"></el-button>
        <el-tabs v-model="activeName">
          <el-tab-pane label="注册" name="first">
                <el-form-item prop="account" label="用户名">
                  <el-input type="text" v-model="ruleForm.account" placeholder="登录账号"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass" label="密码">
                  <el-input type="password" v-model="ruleForm.checkPass" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="checkRepass" label="确认密码">
                  <el-input type="password" v-model="ruleForm.checkRepass" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="手机号">
                  <el-input type="text" v-model="ruleForm.phone" placeholder="手机号"></el-input>
                </el-form-item>
                <!--<el-form-item prop="checkCommn" label="验证码">
                  <el-input type="text" v-model="ruleForm.code" placeholder="验证码"></el-input>
                </el-form-item> -->
                <el-form-item prop="inviteCode" label="邀请码">
                  <el-input type="text" v-model="ruleForm.inviteCode" placeholder="邀请码"></el-input>
                </el-form-item>
                <el-button type="primary" style="width:100%;" @click="regesiter" :loading="logining">注册</el-button>
          </el-tab-pane>
          <!--<el-tab-pane label="店铺信息" name="second">
              <el-form-item prop="checkCommn" label="店铺名称">
                  <el-input type="text" v-model="ruleForm.name" placeholder="店铺名称"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="QQ">
                  <el-input type="text" v-model="ruleForm.qq" placeholder="QQ"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="微信">
                  <el-input type="text" v-model="ruleForm.weixin" placeholder="微信"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="手机号">
                  <el-input type="text" v-model="ruleForm.shopPhone" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="备用号">
                  <el-input type="text" v-model="ruleForm.shopStandby" placeholder="备用号"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="城市">
                  <el-input type="text" v-model="ruleForm.city" placeholder="城市"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="店铺名称">
                  <el-input type="text" v-model="ruleForm.shopName" placeholder="店铺名称"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="掌柜旺旺">
                  <el-input type="text" v-model="ruleForm.shopWWname" placeholder="掌柜旺旺名称"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="店铺链接">
                  <el-input type="text" v-model="ruleForm.shopHerf" placeholder="邀请码"></el-input>
                </el-form-item>
                <el-form-item prop="checkCommn" label="店铺主营">
                  <el-input type="text" v-model="ruleForm.shopType" placeholder="店铺主营类目"></el-input>
                </el-form-item>
                <el-button type="primary" style="width:100%;" @click="login" :loading="logining">添加店铺</el-button>
          </el-tab-pane>-->
        </el-tabs>
      </el-form>
    </div>
</template>

<script>
import ajaxMy from "@/config/request.js";
export default {
  props: {},
  data () {
    return {
      activeName: "first",
      logining: false,
      ruleForm: {
        account: "",
        checkPass: "",
        checkRepass: "",
        phone: "",
        code: "",
        name: "",
        qq: "",
        weixin: "",
        shopPhone: "",
        shopStandby: "",
        city: "",
        shopName: "",
        shopWWname: "",
        shopHerf: "",
        shopType: ""
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        checkRepass: [
          {
            required: true,
            message: "请输入确认密码",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          }
        ],
        inviteCode: [
          {
            required: true,
            message: "请输入邀请码",
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
    goBack () {
      this.$router.push({ path: "/login" });
    },
    regesiter () {
      ajaxMy.post("/api/v1/user/register/vendor", {
        username: this.ruleForm.account,
        password: this.ruleForm.checkPass,
        inviteCode: this.ruleForm.inviteCode,
        phone: this.ruleForm.phone
      }).then((res) => {
        if (res.data.code === "200") {
          this.$router.push({ path: "/login" });
        }
      });
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
            this.$router.push({ path: "/login" }); // 去主页
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

<style scoped lang="scss">
    .regesiter-container {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin: 80px auto;
      width: 350px;
      max-height: 440px;
      overflow: auto;
      padding: 35px 35px 15px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      position: relative;
      .back {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
</style>
