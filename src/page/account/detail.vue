<template>
<div class="container-box">
  <div>
    <el-form :inline="true" label-width="100px" :model="formItem">
      <el-form-item label="任务类型：">
        <el-select v-model="formItem.type">
          <el-option value="all" label="全部任务"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺名称：">
        <el-input v-model="formItem.name" placeholder="店铺名称"></el-input>
      </el-form-item>
      <el-form-item label="任务ID：">
        <el-input v-model="formItem.id" placeholder="任务ID"></el-input>
      </el-form-item>
      <el-form-item label="财务类型：">
        <el-input v-model="formItem.finaType" placeholder="财务类型"></el-input>
      </el-form-item>
      <el-form-item label="旺旺号：">
        <el-input v-model="formItem.wwNo" placeholder="旺旺号"></el-input>
      </el-form-item>
      <el-form-item label="时间：">
        <el-date-picker
          v-model="formItem.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-button type="success" @click="query">确定</el-button>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="submissionTime" label="店铺名称" align="center"></el-table-column>
      <el-table-column prop="bank" label="任务ID" align="center"></el-table-column>
      <el-table-column prop="branch" label="旺旺号" align="center"></el-table-column>
      <el-table-column prop="money" label="收支" align="center"></el-table-column>
      <el-table-column prop="examineTime" label="本金/佣金/增值服务" align="center"></el-table-column>
      <el-table-column prop="examineStatus" label="冻结余额" align="center"></el-table-column>
      <el-table-column prop="examineStatus" label="余额" align="center"></el-table-column>
      <el-table-column prop="examineStatus" label="财务类型" align="center"></el-table-column>
      <el-table-column prop="time" label="时间" align="center"></el-table-column>
      <el-table-column prop="example" label="备注" align="center"></el-table-column>
    </el-table>
    <div style="margin-top:10px;">
      <el-pagination
        style="float: left"
        background
        layout="prev, pager, next"
        :page-size="tablePage.pageSize"
        :current-page="tablePage.page"
        :total="tablePage.total">
      </el-pagination>
      <el-button style="float: right">导出当前明细</el-button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        activeName: 'second',
        formItem: {
          type: "all",
          name: "",
          id: "",
          finaType: "",
          wwNo: "",
          time: null
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
    query () {
      console.log("query");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 180px;
}
</style>
