<template>
<div class="container-box">
<el-form
    :model= "ruleForm"
    :inline="true"
    :rules="rules"
    ref="ruleforms"
    label-position="right"
    label-width="126px"
    class="regesiter-container"
  >
    <el-form-item  label="店铺名称" prop="name">
      <el-input type="text" v-model="ruleForm.name" placeholder="店铺名称"></el-input>
    </el-form-item>
    <el-form-item  label="QQ" prop="qq">
      <el-input type="text" v-model="ruleForm.qq" placeholder="QQ"></el-input>
    </el-form-item>
    <el-form-item  label="微信" prop="weixin">
      <el-input type="text" v-model="ruleForm.weixin" placeholder="微信"></el-input>
    </el-form-item>
    <!-- <el-form-item  label="手机号">
      <el-input type="text" v-model="ruleForm.shopPhone" placeholder="手机号"></el-input>
    </el-form-item> -->
    <el-form-item  label="店铺负责人" prop="shopOrder">
      <el-input type="text" v-model="ruleForm.shopOrder" placeholder="店铺负责人"></el-input>
    </el-form-item>
    <el-form-item  label="店铺负责人职位" prop="orderType">
      <el-select v-model="ruleForm.orderType">
          <el-option value="boss" label="老板"></el-option>
          <el-option value="operation" label="运营"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item  label="店铺人群截图">
      <el-upload
        class="upload-demo"
        :action="pic.actionUrl"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.PBG,.GIF,.BMP"
        :on-success="handleAvatarSuccess"
        :show-file-list="false">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item  label="预计每日任务数" prop="taskNum">
      <el-input type="text" v-model="ruleForm.taskNum" placeholder="预计每日任务数"></el-input>
    </el-form-item>
    <el-form-item label="店铺主营类目" prop="shopType">
      <el-input type="text" v-model="ruleForm.shopType" placeholder="店铺主营类目(二级)"></el-input>
    </el-form-item>
    <el-form-item  label="邀请人店铺名称" prop="inviteName">
      <el-input type="text" v-model="ruleForm.inviteName" placeholder="邀请人店铺名称"></el-input>
    </el-form-item>
    <!--<el-form-item prop="checkCommn" label="备用号">
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
    </el-form-item> -->
    <div style="width:100%;margin: 0 auto">
      <el-button type="primary" style="width:20%;" @click="addShop">添加店铺</el-button>
    </div>
  </el-form>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
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
          shopType: "",
          shopOrder: "",
          inviteName: "",
          taskNum: 0,
          orderType: "boss",
          shopPic: ""
      },
      pic: {
        actionUrl: "",
        url: ""
      },
      rules: {
        name: [{
            required: true,
            message: "请输入店铺名称",
            trigger: ["blur", "change"]
        }],
        qq: [{
            required: true,
            message: "请输入QQ号",
            trigger: ["blur", "change"]
        }],
        weixin: [{
            required: true,
            message: "请输入微信号",
            trigger: ["blur", "change"]
        }],
        shopOrder: [{
            required: true,
            message: "请输入店铺负责人",
            trigger: ["blur", "change"]
        }],
        taskNum: [{
            required: true,
            message: "请输入每日任务数",
            trigger: ["blur", "change"]
        }],
        shopType: [{
            required: true,
            message: "请输入店铺主营类目",
            trigger: ["blur", "change"]
        }],
        inviteName: [{
            required: true,
            message: "请输入邀请人店铺名称",
            trigger: ["blur", "change"]
        }]
      }
    };
  },
  mounted () {
    this.pic.actionUrl = this.$store.state.common.url + "/api/v1/file/upload";
    console.log(this.pic.actionUrl);
  },
  methods: {
    addShop () {
      this.$refs["ruleforms"].validate((valid) => {
        if (valid) {
          if (this.pic.url) {
            ajaxMy.post("/api/v1/shop", {
              goodsSecondType: this.ruleForm.shopType,
              inviterShopName: this.ruleForm.inviteName,
              qqNo: this.ruleForm.qq,
              shopHumanTagUrl: this.pic.url,
              shopName: this.ruleForm.name,
              shopOwner: this.ruleForm.shopOrder,
              shopOwnerPosition: this.ruleForm.orderType,
              wechetNo: this.ruleForm.weixin,
              dailySaleTaskCount: this.ruleForm.taskNum
            }).then((res) => {
              console.log(res);
              if (res.data.code === "200") {
                this.$message({
                  message: '店铺添加成功',
                  type: 'success'
                });
              }
            });
          } else {
            alert("请先上传店铺人群截图");
          }
        }
      });
    },
    handleAvatarSuccess (res, file) {
      this.pic.url = res.result.url;
    }
  }
};
</script>
<style lang="css">
</style>
