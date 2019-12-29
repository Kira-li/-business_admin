<template>
<div class="container-box">
  <div>
      <el-form :inline="true" label-width="100px" :model="formItem">
      <el-form-item label="店铺名称：">
        <el-input v-model="formItem.shopName" placeholder="店铺名称"></el-input>
      </el-form-item>
      <el-form-item label="计划ID：">
        <el-input v-model="formItem.planId" placeholder="计划ID"></el-input>
      </el-form-item>
      <!-- <el-form-item label="商品ID：">
        <el-input v-model="formItem.shopId" placeholder="商品ID"></el-input>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input v-model="formItem.storeName" placeholder="商品名称"></el-input>
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
      </el-form-item>-->
      <el-form-item label="起止时间：">
        <el-date-picker
          v-model="formItem.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="宝贝三级类目:">
        <el-input v-model="formItem.goodsLeafType" placeholder="宝贝所属三级类目"></el-input>
      </el-form-item>
      <el-form-item label="关键词:">
        <el-input v-model="formItem.goodsKeyword" placeholder="关键词（淘口令，二维码）"></el-input>
      </el-form-item>
        <el-button type="success" @click="query">确定</el-button>
      </el-form>
      <div>
        <el-radio-group v-model="formItem.planType">
          <el-radio-button label="1">全部</el-radio-button>
          <el-radio-button label="2">创建中</el-radio-button>
          <el-radio-button label="3">正在执行</el-radio-button>
          <el-radio-button label="4">执行完成</el-radio-button>
          <el-radio-button label="5">终止计划</el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top:10px;">
         <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="计划ID" align="center"></el-table-column>
          <el-table-column prop="execDate" label="日期" align="center"></el-table-column>
          <el-table-column prop="shopName" label="店铺名称" align="center"></el-table-column>
          <el-table-column prop="goodsLeafType" label="宝贝所属三级类目" align="center"></el-table-column>
          <el-table-column prop="goodsUrl" label="宝贝链接" align="center"></el-table-column>
          <el-table-column prop="goodsMainUrl" label="主图链接" align="center"></el-table-column>
          <el-table-column prop="goodsSalePrice" label="付款价格" align="center"></el-table-column>
          <el-table-column prop="goodsKeyword" label="关键词（淘口令，二维码）" align="center"></el-table-column>
          <el-table-column prop="buyCount" label="拍下件数" align="center" width="50"></el-table-column>
          <el-table-column prop="timeRanges" label="时间段" align="center"></el-table-column>
          <el-table-column prop="remark" label="商家要求" align="center"></el-table-column>
          <el-table-column prop="active" label="任务状态" align="center"></el-table-column>
        </el-table>
        <el-pagination
          style="float: left"
          background
          :page-sizes="[5, 10, 20]"
          :page-size="tablePage.pageSize"
          :current-page="tablePage.page"
          @current-change="currentChange"
          @size-change="sizeChange"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablePage.total">
        </el-pagination>
    </div>
  </div>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
        formItem: {
          type: "all",
          shopName: "",
          planId: "",
          planName: "",
          shopId: "",
          storeName: "",
          time: null,
          planType: "1",
          goodsKeyword: "",
          goodsLeafType: ""
        },
        tableData: [],
        tablePage: {
          page: 1,
          pageSize: 5,
          total: 100
        }
    };
  },
  mounted () {
    this.query();
  },
  methods: {
    planExport () {
        console.log(11);
    },
    query () {
      ajaxMy.get("/api/v1/sale_task", {
        params: {
          shopName: this.formItem.shopName,
          goodsLeafType: this.formItem.goodsLeafType,
          id: this.formItem.planId,
          page: this.tablePage.page,
          size: this.tablePage.pageSize
        }
        }).then((res) => {
          if (res.status === 200) {
            this.tableData = res.data.list;
            this.tablePage.total = res.data.total;
          }
      });
    },
    currentChange (val) {
      this.tablePage.page = val;
      this.query();
    },
    sizeChange (val) {
      this.tablePage.pageSize = val;
      this.query();
    }
  }
};
</script>

<style lang="css">
</style>
