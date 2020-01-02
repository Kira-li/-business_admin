<template>
<div class="container-box">
  <div>
    <el-form :inline="true" label-width="100px" :model="formItem">
      <el-form-item label="交易类型：">
        <el-select v-model="formItem.transationType">
          <el-option value="" label="全部"></el-option>
          <el-option value="1" label="用户充值"></el-option>
          <el-option value="2" label="管理员充值"></el-option>
          <el-option value="3" label="管理员扣除"></el-option>
          <el-option value="4" label="发布任务消耗"></el-option>
          <el-option value="5" label="接任务获取"></el-option>
          <el-option value="6" label="提现消耗"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务ID：" v-if="formItem.transationType===3||formItem.transationType===4">
        <el-input v-model="formItem.taskId" placeholder="任务ID"></el-input>
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
      <el-button type="success" @click="getUserMoneyLog">确定</el-button>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="transationTime" label="交易时间" align="center"></el-table-column>
      <el-table-column prop="bankAccount" label="转账银行" align="center"></el-table-column>
      <el-table-column prop="payUsername" label="转账人" align="center"></el-table-column>
      <el-table-column prop="transationAmount" label="金额" align="center"></el-table-column>
      <el-table-column prop="transationType" label="交易类型" align="center"></el-table-column>
      <el-table-column prop="auditTime" label="审核时间" align="center"></el-table-column>
      <el-table-column prop="auditStatus" label="审核状态" align="center">
        <template slot-scope="scope">
          <template v-if="scope.row.auditStatus === 1">
            <span>已审核</span>
          </template>
          <template v-if="scope.row.auditStatus === 0">
            <span style="color:#fd806c;">未审核</span>
          </template>
          <template v-if="scope.row.auditStatus === -1">
            <span style="color:#fd806c;">审核失败</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="example" label="备注" align="center"></el-table-column>
    </el-table>
    <div style="margin-top:10px;">
      <el-pagination
        style="float: left"
        background
        layout="prev, pager, next"
        :page-size="tablePage.pageSize"
        :current-page="tablePage.page"
        @current-change="currentChange"
        :total="tablePage.total">
      </el-pagination>
      <el-button style="float: right">导出当前明细</el-button>
    </div>
  </div>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
        activeName: 'second',
        formItem: {
          taskId: "",
          transationType: "",
          time: null
        },
        tableData: [],
        tablePage: {
          page: 1,
          pageSize: 10,
          total: 100
        }
    };
  },
  mounted () {
    this.getUserMoneyLog();
  },
  methods: {
    currentChange (val) {
      this.tablePage.page = val;
      this.getUserMoneyLog();
    },
    getUserMoneyLog () {
      ajaxMy.get("/api/v1/user/user_money_log", {
        params: {
          taskId: this.formItem.taskId,
          transationType: this.formItem.transationType,
          page: this.tablePage.page,
          size: this.tablePage.pageSize
        }
      }).then((res) => {
        this.tablePage.total = res.data.total;
        this.tableData = res.data.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 180px;
}
</style>
