<template>
<div class="container-box">
  <div>
    <p style="color: orange">邀请熟悉的好友入驻平台，好友每完成一单销量任务，您将获得0.5元的佣金</p>
    <p>您的邀请码为<span>{{inviteCode}}</span></p>
  </div>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="邀请明细" name="first">
        <div>
          <el-form :inline="true" :model="invteformItem"  label-width="90px">
            <el-form-item label="手机号码">
              <el-input v-model="invteformItem.phone" placeholder="手机号码"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="invteformItem.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
              <el-date-picker
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onCharge" style="margin-top:10px">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="invatetableData" border style="width: 100%">
            <el-table-column prop="createTime" label="注册时间" align="center"></el-table-column>
            <el-table-column prop="bankAccount" label="用户名" align="center"></el-table-column>
            <el-table-column prop="payUsername" label="手机号码" align="center"></el-table-column>
            <el-table-column prop="transationAmount" label="备注名称" align="center"></el-table-column>
            <el-table-column prop="auditTime" label="提现金额" align="center"></el-table-column>
            <el-table-column prop="example" label="直属商家累计单量" align="center"></el-table-column>
            <el-table-column prop="example" label="下属商家累计单量" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="每日提成明细" name="second">
        <div>
          <el-form :inline="true" :model="invteformItem"  label-width="90px">
            <el-form-item label="手机号码">
              <el-input v-model="invteformItem.phone" placeholder="手机号码"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="invteformItem.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
              <el-date-picker
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onCharge" style="margin-top:10px">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="invatetableData" border style="width: 100%">
            <el-table-column prop="createTime" label="时间" align="center"></el-table-column>
            <el-table-column prop="bankAccount" label="用户名" align="center"></el-table-column>
            <el-table-column prop="payUsername" label="手机号码" align="center"></el-table-column>
            <el-table-column prop="transationAmount" label="总提成" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="每月提成明细" name="third">
        <div>
          <el-form :inline="true" :model="invteformItem"  label-width="90px">
            <el-form-item label="手机号码">
              <el-input v-model="invteformItem.phone" placeholder="手机号码"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="invteformItem.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
              <el-date-picker
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onCharge" style="margin-top:10px">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="invatetableData" border style="width: 100%">
            <el-table-column prop="createTime" label="时间" align="center"></el-table-column>
            <el-table-column prop="bankAccount" label="用户名" align="center"></el-table-column>
            <el-table-column prop="payUsername" label="手机号码" align="center"></el-table-column>
            <el-table-column prop="transationAmount" label="总提成" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-pagination
      style="margin-top: 20px;"
      background
      layout="prev, pager, next"
      :page-size="tablePage.pageSize"
      :current-page="tablePage.page"
      @current-change="currentChange"
      :total="tablePage.total">
    </el-pagination>
  </div>
</div>
</template>
<script>
// import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
      inviteCode: "",
      activeName: "first",
      invteformItem: {
        phone: "",
        userName: "",
        relaseTime: ""
      },
      invatetableData: [],
      tablePage: {
        page: 1,
        pageSize: 10,
        total: 100
      }
    };
  },
  mounted () {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    onCharge () {
      if (this.activeName === "first") {
        console.log(this.activeName);
      } else if (this.activeName === "second") {
        console.log(this.activeName);
      } else {
        console.log(this.activeName);
      }
    },
    handleAvatarSuccess (res, file) {
      this.pic.url = res.result.url;
    },
    currentChange (val) {
      this.tablePage.page = val;
    }
  }
};
</script>
<style lang="css">
</style>
