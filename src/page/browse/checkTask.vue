<template>
<div class="container-box">
  <div>
      <el-form :inline="true" label-width="110px" :model="formItem">
        <el-form-item label="店铺名称：">
          <el-input v-model="formItem.shopName" placeholder="店铺名称"></el-input>
        </el-form-item>
        <el-form-item label="任务ID：">
          <el-input v-model="formItem.taskId" placeholder="任务ID"></el-input>
        </el-form-item>
        <el-form-item label="计划ID：">
          <el-input v-model="formItem.planId" placeholder="计划ID"></el-input>
        </el-form-item>
        <el-form-item label="浏览类型：">
          <el-select v-model="formItem.completeType">
            <el-option value="all" label="全部"></el-option>
            <el-option value="1" label="错拍"></el-option>
            <el-option value="2" label="金额错误"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务类型：">
          <el-select v-model="formItem.taskType">
            <el-option value="1" label="关键词"></el-option>
            <el-option value="2" label="待处理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键词：">
          <el-input v-model="formItem.keyWord" placeholder="关键词"></el-input>
        </el-form-item>
        <el-form-item label="商品ID：">
          <el-input v-model="formItem.storeName" placeholder="商品ID"></el-input>
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
        <el-button type="success" @click="query">查询</el-button>
      </el-form>
      <div>
        <el-button type="success">批量审核成功</el-button>
        <el-button type="danger">批量审核失败</el-button>
      </div>
      <div style="margin-top:10px;">
         <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="shopName" label="店铺名称/商品ID" align="center"></el-table-column>
          <el-table-column prop="money" label="旺旺号/任务类型" align="center"></el-table-column>
          <el-table-column prop="examineStatus" label="关键词" align="center"></el-table-column>
          <el-table-column prop="branch" label="商品ID" align="center"></el-table-column>
          <el-table-column prop="bank" label="任务ID/计划ID" align="center"></el-table-column>
          <el-table-column prop="bank" label="接单时间/审核完成时间" align="center"></el-table-column>
          <el-table-column prop="time" label="加购图" align="center"></el-table-column>
          <el-table-column prop="time" label="收藏图" align="center"></el-table-column>
          <el-table-column prop="time" label="关注图" align="center"></el-table-column>
          <el-table-column prop="time" label="操作" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 10px;color: red;">提示：截图只保留15天，请在审核时间内完成</div>
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
          shopName: "",
          planId: "",
          keyWord: "",
          shopId: "",
          taskId: "",
          orderTime: null,
          taskType: "1",
          planType: "1",
          completeType: ""
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
