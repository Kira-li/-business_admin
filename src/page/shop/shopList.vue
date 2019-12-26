<template>
<div class="container-box">
    <el-row style="height:98%;">
        <el-col :span="16" style="height:100%">
            <el-card shadow>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="shopName" label="店铺名称" align="center"></el-table-column>
                    <el-table-column prop="qqNo" label="QQ" align="center"></el-table-column>
                    <el-table-column prop="wechetNo" label="微信" align="center"></el-table-column>
                    <el-table-column prop="shopOwner" label="店铺负责人" align="center"></el-table-column>
                    <el-table-column prop="shopOwnerPosition" label="店铺负责人职位" align="center">
                        <template slot-scope="scope">
                            <template v-if="scope.row.shopOwnerPosition == 'boss'">
                                老板
                            </template>
                            <template v-if="scope.row.shopOwnerPosition == 'operation'">
                                运营
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dailySaleTaskCount" label="预计每日任务数" align="center"></el-table-column>
                    <el-table-column prop="goodsSecondType" label="店铺主营类目" align="center"></el-table-column>
                    <el-table-column prop="inviterShopName" label="邀请人店铺名称" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click="listDel(scope.row.id)" type="danger" size="mini">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="8" style="height:100%">
            <el-card shadow>
                <div slot="header" class="clearfix" style="height: 40px;line-height: 40px">
                    <span>店铺详情</span>
                    <el-button style="margin-top: 6px;float: right;" type="primary" size="mini" :disabled="ruleForm.id" @click="edit">修改</el-button>
                </div>
                <div>
                    <el-form :model= "ruleForm" ref="ruleforms" :rules="rules" label-position="right" label-width="126px" class="regesiter-container">
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
                        <el-form-item  label="店铺人群截图" prop="pic">
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
                    </el-form>
                </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
      tableData: [],
      ruleForm: {
          id: "",
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
      this.pic.actionUrl = this.$store.state.common.url + "/upload";
      this.getTableData();
  },
  methods: {
    getTableData () {
      ajaxMy.get("/api/v1/shop").then((res) => {
        console.log(res);
        if (res.data.code === "200") {
            this.tableData = res.data.list;
        }
      });
    },
    handleAvatarSuccess (res, file) {
      this.pic.url = res.result.url;
    },
    edit () {
         this.$refs["ruleforms"].validate((valid) => {
            if (valid) {
                if (this.pic.url) {
                    ajaxMy.put("/api/v1/shop/" + this.ruleForm.id, {
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
    listDel (id) {
        ajaxMy.delete("/api/v1/shop/" + id).then((res) => {
            if (res.data.code === "200") {
                this.$message({
                    message: '店铺删除成功',
                    type: 'success'
                });
                this.getTableData();
            }
        });
    }
  }
};
</script>
<style lang="css">
</style>
