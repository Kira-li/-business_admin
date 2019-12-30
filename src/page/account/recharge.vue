<template>
<div class="container-box">
  <el-row>
    <el-col :span="12">
      <div class="accout_detail"><div>当前账户余额(元)：<strong>{{account.canUse}}</strong></div></div>
      <el-card>
        <div class="card_mid border_rad">
          <div><strong>第一步：请先转账到以下账户</strong></div>
          <p>银行卡号：{{bank.accountNumber}}</p>
          <p>户名：{{bank.accountName}}</p>
          <p>开户行：{{bank.bankName}}</p>
          <p>支行：{{bank.subbranchBankName}}</p>
          <div><el-button type="primary" size="mini" @click="addCard" style="margin-top:10px">添加个人银行卡</el-button></div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <div class="accout_detail"><div>当前冻结余额(元)：<strong>{{account.freeze}}</strong></div></div>
      <el-card>
        <div style="display: table;margin: 0 auto;">
          <div style="display: table;margin: 0 auto;padding-bottom: 10px;"><strong>第二步：确认转账金额(请勿通过支付宝充值)</strong></div>
          <el-form :model="formItem"  label-width="90px">
            <el-form-item label="转账金额">
              <el-input v-model="formItem.money" style="width: 217px" placeholder="转账金额"></el-input>
            </el-form-item>
            <!--<el-form-item label="转账银行">
              <el-select v-model="formItem.bank" placeholder="转账银行">
                <el-option label="中国银行" value="BOC"></el-option>
                <el-option label="中国工商银行" value="ICBC"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="银行卡卡号">
              <el-input disabled v-model="formItem.bankAccount" style="width: 217px" placeholder="银行卡卡号"></el-input>
            </el-form-item>
            <el-form-item label="银行卡类型" disabled>
              <el-select disabled v-model="formItem.bankId">
                <el-option v-for="item in bankList" :key="item.id" :value="item.id" :label="item.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡姓名" disabled>
              <el-input disabled v-model="formItem.loginUserTruename" style="width: 217px" placeholder="银行卡姓名"></el-input>
            </el-form-item>
            <el-form-item label="交易时间">
              <el-date-picker
                v-model="formItem.transationTime"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="交易时间">
              </el-date-picker>
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
      <el-table-column prop="transationTime" label="交易时间" align="center"></el-table-column>
      <el-table-column prop="bankAccount" label="转账银行" align="center"></el-table-column>
      <el-table-column prop="transationAmount" label="金额" align="center"></el-table-column>
      <el-table-column prop="auditTime" label="审核时间" align="center"></el-table-column>
      <el-table-column prop="auditStatus" label="审核状态" align="center"></el-table-column>
      <el-table-column prop="example" label="备注" align="center"></el-table-column>
    </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :page-size="tablePage.pageSize"
    :current-page="tablePage.page"
    @current-change="currentChange"
    :total="tablePage.total">
  </el-pagination>
  </el-card>
  <el-dialog title="添加银行卡" :visible.sync="addModel" width="40%">
    <div>
      <el-form :model="addformItem"  label-width="90px">
            <el-form-item label="银行卡卡号">
              <el-input v-model="addformItem.cardNumber" style="width: 217px" placeholder="银行卡卡号"></el-input>
            </el-form-item>
            <el-form-item label="银行卡类型">
              <el-select v-model="addformItem.type">
                <el-option v-for="item in bankList" :key="item.id" :value="item.id" :label="item.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡姓名">
              <el-input v-model="addformItem.name" style="width: 217px" placeholder="银行卡姓名"></el-input>
            </el-form-item>
          </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addModel = false">取 消</el-button>
        <el-button type="primary" @click="addBankMes">确 定</el-button>
      </span>
  </el-dialog>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  name: "recharge",
  data () {
    return {
        activeName: 'second',
        account: {
          canUse: 0,
          freeze: 0
        },
        bank: {
          accountNumber: 222222,
          accountName: "lisi",
          bankName: "中国银行",
          subbranchBankName: "杭州支行"
        },
        formItem: {
          money: 0,
          loginUserTruename: "",
          bankAccount: "",
          transationTime: null,
          bankId: ""
        },
        addformItem: {
          id: "",
          bank: "",
          name: "",
          cardNumber: "",
          type: ""
        },
        tableData: [],
        tablePage: {
          page: 1,
          pageSize: 10,
          total: 100
        },
        addModel: false,
        bankList: ""
    };
  },
  mounted () {
      this.getBankList();
      this.getUserBank();
      this.getRecharge();
      this.getUserMoneyLog();
  },
  methods: {
    addCard () {
      this.addModel = true;
    },
    addBankMes () {
      ajaxMy.patch("/api/v1/user/user_bank", {
        bankId: this.addformItem.type,
        bankAccount: this.addformItem.cardNumber,
        loginUserTruename: this.addformItem.name,
        id: this.addformItem.id
      }).then((res) => {
        this.addModel = false;
        this.$message({
            message: '添加成功',
            type: 'success'
        });
        this.getUserBank();
      });
    },
    getUserBank () {
      ajaxMy.get("/api/v1/user/user_bank").then((res) => {
        this.formItem.loginUserTruename = res.data.loginUserTruename;
        this.formItem.bankAccount = res.data.bankAccount;
        this.formItem.bankId = res.data.bankId;
      });
    },
    getBankList () {
      ajaxMy.get("/api/v1/bank/type").then((res) => {
        this.bankList = res.data;
      });
    },
    getRecharge () {
      ajaxMy.get("/api/vi/bank/platform").then((res) => {
        this.bank = res.data;
      });
    },
    onCharge () {
      ajaxMy.post("/api/v1/user/recharge", {
        bankAccount: this.formItem.bankAccount,
        transationAmount: this.formItem.money,
        payUsername: this.formItem.loginUserTruename,
        bankId: this.formItem.bankId,
        transationType: 1,
        transationTime: this.formItem.transationTime
      }).then((res) => {
        if (res.data.code === "200") {
          this.$message({
              message: '提交成功，待管理员审核',
              type: 'success'
          });
        };
      });
    },
    currentChange (val) {
      this.tablePage.page = val;
    },
    getUserMoneyLog () {
      ajaxMy.get("/api/v1/user/user_money_log", {
        params: {
          transationType: 1,
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
  height: 375px;
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
