<template>
<div class="container-box">
  <el-row>
    <el-col :span="12">
      <div class="accout_detail"><div>当前账户余额(元)：<strong>{{account.canUse}}</strong></div></div>
      <el-card>
        <div class="card_mid border_rad">
          <div><strong>第一步：请先转账到以下账户</strong></div>
          <p>银行卡号：{{bank.number}}</p>
          <p>户名：{{bank.name}}</p>
          <p>开户行：{{bank.bankName}}</p>
          <p>支行：{{bank.branch}}</p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <div class="accout_detail"><div>当前冻结余额(元)：<strong>{{account.freeze}}</strong></div></div>
      <el-card>
        <div style="display: table;margin: 0 auto;">
          <div style="display: table;margin: 0 auto;padding-bottom: 10px;"><strong>第二步：确认转账金额</strong></div>
          <el-form :model="formItem"  label-width="90px">
            <el-form-item label="转账金额">
              <el-input v-model="formItem.money" style="width: 217px" placeholder="转账金额"></el-input>
            </el-form-item>
            <el-form-item label="转账银行">
              <el-select v-model="formItem.bank" placeholder="转账银行">
                <el-option label="中国银行" value="BOC"></el-option>
                <el-option label="中国工商银行" value="ICBC"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡卡号">
              <el-input v-model="formItem.cardNumber" style="width: 217px" placeholder="银行卡卡号"></el-input>
            </el-form-item>
            <el-form-item label="银行卡姓名">
              <el-input v-model="formItem.name" style="width: 217px" placeholder="银行卡姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onCharge" style="margin-top:10px">确定充值</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div>
    注意事项：<br>
    审核时间： 9:00 - 20:00
  </div>
  <el-card>
    <div slot="header" class="clearfix">
      <span>充值记录</span>
    </div>
     <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="submissionTime" label="提交时间"></el-table-column>
      <el-table-column prop="bank" label="转账银行"></el-table-column>
      <el-table-column prop="branch" label="开户行"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column prop="examineTime" label="审核时间" ></el-table-column>
      <el-table-column prop="examineStatus" label="审核状态"></el-table-column>
      <el-table-column prop="example" label="备注"></el-table-column>
    </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :page-size="tablePage.pageSize"
    :current-page="tablePage.page"
    :total="tablePage.total">
  </el-pagination>
  </el-card>
</div>
</template>
<script>
export default {
  data () {
    return {
        activeName: 'second',
        account: {
          canUse: 0,
          freeze: 0
        },
        bank: {
          number: 222222,
          name: "lisi",
          bankName: "中国银行",
          branch: "杭州支行"
        },
        formItem: {
          money: 33,
          bank: "BOC",
          name: "",
          cardNumber: ""
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
    onCharge () {
      console.log(11);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card__body {
  padding: 0;
}
.accout_detail {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #d8c4c0;
  div {
    display: table;
    margin: 0 auto;
  }
  strong {
    color: #ff4000;
  }
}
.card_mid {
  height: 210px;
  font-size: 16px;
  strong {
    font-size: 14px;
  }
  p,div {
    margin: 15px auto;
    width: 200px;
  }
}
.border_rad {
  border-radius: 5px;
}
</style>
