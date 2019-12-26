<template>
<div class="container-box">
  <div>
      <el-form :inline="true" label-width="100px" :model="formItem">
      <el-form-item label="店铺名称：">
        <el-input v-model="formItem.shopName" placeholder="店铺名称"></el-input>
      </el-form-item>
      <el-form-item label="所属计划ID：">
        <el-input v-model="formItem.planId" placeholder="所属计划ID"></el-input>
      </el-form-item>
      <el-form-item label="平台任务ID：">
        <el-input v-model="formItem.taskId" placeholder="平台任务ID"></el-input>
      </el-form-item>
      <el-form-item label="旺旺号：">
        <el-input v-model="formItem.wwName" placeholder="旺旺号"></el-input>
      </el-form-item>
      <el-form-item label="付款金额：">
        <el-input v-model="formItem.storeName" placeholder="付款金额"></el-input>
      </el-form-item>
      <el-form-item label="商品ID：">
        <el-input v-model="formItem.shopId" placeholder="商品ID"></el-input>
      </el-form-item>
      <el-form-item label="任务类型：">
        <el-select v-model="formItem.type">
          <el-option value="all" label="全部任务"></el-option>
          <el-option value="1" label="搜素下单任务"></el-option>
          <el-option value="2" label="淘口令下单任务"></el-option>
          <el-option value="3" label="预约增权单"></el-option>
          <el-option value="4" label="二维码下单任务"></el-option>
          <el-option value="5" label="直播入口下单任务"></el-option>
          <el-option value="6" label="抖音入口下单任务"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="评价类型：">
        <el-select v-model="formItem.evalutetype">
          <el-option value="all" label="全部"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接单时间：">
        <el-date-picker
          v-model="formItem.orderTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="邀请时间：">
        <el-date-picker
          v-model="formItem.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
        <el-button type="warning" @click="query">查询</el-button>
      </el-form>
      <div>
        <el-radio-group v-model="formItem.planType">
          <el-radio-button label="1">待提交订单</el-radio-button>
          <el-radio-button label="2">待审核</el-radio-button>
          <el-radio-button label="3">审核成功</el-radio-button>
          <el-radio-button label="4">投诉处理中</el-radio-button>
          <el-radio-button label="5">投诉已完结</el-radio-button>
          <el-radio-button label="6">超时未操作</el-radio-button>
          <el-radio-button label="7">已撤销</el-radio-button>
        </el-radio-group>
      </div>
    <div style="margin-top:10px;">
         <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="shopName" label="邀请时间" align="center"></el-table-column>
          <el-table-column prop="money" label="店铺名称" align="center"></el-table-column>
          <el-table-column prop="examineTime" label="旺旺号" align="center"></el-table-column>
          <el-table-column prop="examineStatus" label="任务类型" align="center"></el-table-column>
          <el-table-column prop="bank" label="指定评价" align="center"></el-table-column>
          <el-table-column prop="branch" label="指定晒图" align="center"></el-table-column>
          <el-table-column prop="branch" label="买手截图" align="center"></el-table-column>
          <el-table-column prop="time" label="操作" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px;">
            <el-button type="success" size="mini" style="float: left" @click="query">导出当前明细</el-button>
            <el-pagination
              style="float: right"
              background
              :page-sizes="[5, 10, 20]"
              :page-size="tablePage.pageSize"
              :current-page="tablePage.page"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tablePage.total">
            </el-pagination>
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        formItem: {
          type: "all",
          shopName: "",
          planId: "",
          wwName: "",
          shopId: "",
          taskId: "",
          orderTime: null,
          time: null,
          evalutetype: "all",
          planType: "1"
        },
        tableData: [],
        tablePage: {
          page: 2,
          pageSize: 10,
          total: 100
        }
    };
  },
  methods: {
    planExport () {
        console.log(11);
    },
    query () {
        console.log(11);
    }
  }
};
</script>

<style lang="css">
</style>
