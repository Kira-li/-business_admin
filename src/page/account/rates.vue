<template>
<div class="container-box">
    <p style="color: red">实际扣费以财务流水为准，有疑问联系平台客服</p>
    <div>
      <el-card >
        <div slot="header" class="clearfix">
          <span style="font-size: 16px; margin-left: 20px;">销量价格</span>
        </div>
        <el-table :data="salesData1" border style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="price" label="价格区间(元)" align="center"></el-table-column>
          <el-table-column prop="rank1" label="0-100" align="center"></el-table-column>
          <el-table-column prop="rank2" label="100-200" align="center"></el-table-column>
          <el-table-column prop="rank3" label="200-300" align="center"></el-table-column>
          <el-table-column prop="rank4" label="300-400" align="center"></el-table-column>
          <el-table-column prop="rank5" label="400-500" align="center"></el-table-column>
          <el-table-column prop="rank6" label="500-600" align="center"></el-table-column>
          <el-table-column prop="rank7" label="600-700" align="center"></el-table-column>
          <el-table-column prop="rank8" label="700-800" align="center"></el-table-column>
          <el-table-column prop="rank9" label="800-900" align="center"></el-table-column>
        </el-table>
        <el-table :data="salesData2" border style="width: 100%; margin-top:10px;" :row-class-name="tableRowClassName">
          <el-table-column prop="price" label="价格区间(元)" align="center"></el-table-column>
          <el-table-column prop="rank1" label="900-1000" align="center"></el-table-column>
          <el-table-column prop="rank2" label="1000-1500" align="center"></el-table-column>
          <el-table-column prop="rank3" label="1500-2000" align="center"></el-table-column>
          <el-table-column prop="rank4" label="2000-3000" align="center"></el-table-column>
          <el-table-column prop="rank5" label="3000-4000" align="center"></el-table-column>
          <el-table-column prop="rank6" label="4000-5000" align="center"></el-table-column>
          <el-table-column prop="rank7" label="5000-6000" align="center"></el-table-column>
          <el-table-column prop="rank8" label="6000-10000" align="center"></el-table-column>
          <el-table-column prop="rank9" label="--" align="center"></el-table-column>
        </el-table>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span style="font-size: 16px; margin-left: 20px;">销量增值价格</span>
        </div>
        <el-table :data="incrementData" border style="width: 100%; margin-top:10px;" :row-class-name="tableRowClassName">
          <el-table-column prop="type" label="价格类型" align="center"></el-table-column>
          <el-table-column prop="area" label="投放区域" align="center"></el-table-column>
          <el-table-column prop="sex" label="买手性别" align="center"></el-table-column>
          <el-table-column prop="age" label="买手年龄" align="center"></el-table-column>
          <el-table-column prop="star" label="信用(星级/钻级)" align="center"></el-table-column>
          <el-table-column prop="phone" label="手机机型" align="center"></el-table-column>
          <el-table-column prop="order" label="预约增权" align="center"></el-table-column>
        </el-table>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span style="font-size: 16px; margin-left: 20px;">流量价格</span>
        </div>
        <el-table :data="flowData" border style="width: 100%; margin-top:10px;" :row-class-name="tableRowClassName">
          <el-table-column prop="type" label="价格类型" align="center" width="80px"></el-table-column>
          <el-table-column prop="browse" label="浏览" align="center" width="80px"></el-table-column>
          <el-table-column prop="browseFollow" label="浏览 + 关注" align="center"></el-table-column>
          <el-table-column prop="browseAdd" label="浏览 + 加购" align="center"></el-table-column>
          <el-table-column prop="browseCollection" label="浏览 + 收藏" align="center"></el-table-column>
          <el-table-column prop="browse1" label="浏览 + 加购 + 关注" align="center"></el-table-column>
          <el-table-column prop="browse2" label="浏览 + 关注 + 收藏" align="center"></el-table-column>
          <el-table-column prop="browse3" label="浏览 + 加购 + 收藏" align="center"></el-table-column>
          <el-table-column prop="browse4" label="浏览 + 加购 + 关注 + 收藏" align="center"></el-table-column>
        </el-table>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span style="font-size: 16px; margin-left: 20px;">流量增值价格</span>
        </div>
        <el-table :data="incrementData" border style="width: 100%; margin-top:10px;" :row-class-name="tableRowClassName">
          <el-table-column prop="type" label="价格类型" align="center"></el-table-column>
          <el-table-column prop="area" label="投放区域" align="center"></el-table-column>
          <el-table-column prop="sex" label="买手性别" align="center"></el-table-column>
          <el-table-column prop="age" label="买手年龄" align="center"></el-table-column>
          <el-table-column prop="star" label="信用(星级/钻级)" align="center"></el-table-column>
          <el-table-column prop="phone" label="手机机型" align="center"></el-table-column>
          <el-table-column prop="visit" label="回访单" align="center"></el-table-column>
        </el-table>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span style="font-size: 16px; margin-left: 20px;">评价/催收价格</span>
        </div>
        <el-table :data="evaluateData" border style="width: 100%; margin-top:10px;" :row-class-name="tableRowClassName">
          <el-table-column prop="type" label="价格类型" align="center"></el-table-column>
          <el-table-column prop="img" label="图文评价" align="center"></el-table-column>
          <el-table-column prop="video" label="视频评价" align="center"></el-table-column>
          <el-table-column prop="free" label="自由评价" align="center"></el-table-column>
          <el-table-column prop="collection" label="催收任务" align="center"></el-table-column>
        </el-table>
      </el-card>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        salesData1: [{
          price: "默认佣金金额",
          rank1: 18.00,
          rank2: 18.00,
          rank3: 18.00,
          rank4: 21.00,
          rank5: 21.00,
          rank6: 23.00,
          rank7: 23.00,
          rank8: 23.00,
          rank9: 28.00
        }, {
          price: "您的佣金金额",
          rank1: 15.00,
          rank2: 15.00,
          rank3: 15.00,
          rank4: 18.00,
          rank5: 18.00,
          rank6: 20.00,
          rank7: 20.00,
          rank8: 20.00,
          rank9: 25.00
        }],
        salesData2: [{
          price: "默认佣金金额",
          rank1: 28.00,
          rank2: 33.00,
          rank3: 38.00,
          rank4: 43.00,
          rank5: 53.00,
          rank6: 63.00,
          rank7: 73.00,
          rank8: 103.00,
          rank9: "--"
        }, {
          price: "您的佣金金额",
          rank1: 25.00,
          rank2: 30.00,
          rank3: 35.00,
          rank4: 40.00,
          rank5: 50.00,
          rank6: 60.00,
          rank7: 70.00,
          rank8: 100.00,
          rank9: "--"
        }],
        incrementData: [
          { type: "默认佣金金额", "area": 0.75, "sex": 0.75, "age": 0.75, "star": "0.75/0.90", "phone": 0.75, "order": 0.75, "visit": 1.50 },
          { type: "您的佣金金额", "area": 0.50, "sex": 0.50, "age": 0.50, "star": "0.50/0.60", "phone": 0.50, "order": 0.50, "visit": 1.00 }
        ],
        flowData: [
          { type: "默认佣金金额", "browse": 1.05, "browseFollow": 1.50, "browseAdd": 1.50, "browseCollection": 1.50, "browse1": 1.95, "browse2": 1.95, "browse3": 1.95, "browse4": 2.40 },
          { type: "您的佣金金额", "browse": 0.70, "browseFollow": 1.00, "browseAdd": 1.00, "browseCollection": 1.00, "browse1": 1.30, "browse2": 1.30, "browse3": 1.30, "browse4": 1.60 }
        ],
        evaluateData: [
          { type: "默认佣金金额", "img": 3.00, "video": 6.00, "free": 2.00, "collection": 0.50 },
          { type: "您的佣金金额", "img": 3.00, "video": 6.00, "free": 2.00, "collection": 0.50 }
        ]
    };
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
        if (rowIndex === 1) {
          return "tableColor";
        }
        return "";
    }
  }
};
</script>
<style lang="scss" scoped>
  .el-table tr.tableColor .cell {
    color: #ff3333 ;
  }
</style>
