<template>
<div class="container-box">
  <div>
      <el-form :inline="true" label-width="100px" :model="formItem">
      <el-form-item label="店铺名称：">
        <el-input v-model="formItem.shopName" placeholder="店铺名称"></el-input>
      </el-form-item>
      <el-form-item label="旺旺ID：">
        <el-input v-model="formItem.wwID" placeholder="旺旺ID"></el-input>
      </el-form-item>
      <el-form-item label="平台任务ID：">
        <el-input v-model="formItem.taskId" placeholder="平台任务ID"></el-input>
      </el-form-item>
      <el-form-item label="投诉类型：">
        <el-select v-model="formItem.completeType">
          <el-option value="all" label="全部"></el-option>
          <el-option value="1" label="错拍"></el-option>
          <el-option value="2" label="金额错误"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="处理结果：">
        <el-select v-model="formItem.completeResult">
          <el-option value="1" label="已处理"></el-option>
          <el-option value="2" label="待处理"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品ID：">
        <el-input v-model="formItem.shopId" placeholder="商品ID"></el-input>
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
      <el-form-item label="投诉时间：">
        <el-date-picker
          v-model="formItem.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
        <el-button type="success" @click="query">查询</el-button>
      </el-form>
      <div>
        <el-radio-group v-model="formItem.planType">
          <el-radio-button label="1">待处理</el-radio-button>
          <el-radio-button label="2">已处理</el-radio-button>
        </el-radio-group>
      </div>
    <div style="margin-top:10px;">
         <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="shopName" label="投诉时间" align="center"></el-table-column>
          <el-table-column prop="money" label="店铺名称" align="center"></el-table-column>
          <el-table-column prop="examineTime" label="旺旺号" align="center"></el-table-column>
          <el-table-column prop="examineStatus" label="付款金额" align="center"></el-table-column>
          <el-table-column prop="bank" label="投诉类型" align="center"></el-table-column>
          <el-table-column prop="branch" label="投诉内容" align="center"></el-table-column>
          <el-table-column prop="branch" label="处理状态/处理结果" align="center"></el-table-column>
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
          wwID: "",
          shopId: "",
          taskId: "",
          orderTime: null,
          time: null,
          planType: "1",
          completeType: "1",
          completeResult: "1"
        },
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
