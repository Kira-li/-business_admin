<template>
<div class="container-box">
    <el-row>
        <el-col :span="16">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <div class="box-card-header" style="background: #d3dfd9">公告板</div>
                </div>
                <div>
                    <p>---------------------------------------------------------------</p>
                    历史公告：<br>
                    <br>
                    新更新：增加商家导入<span>历史订单</span>功能（最近40天有在历史订单里的旺旺不分配任务，用于其他平台转过来的商家避免旺旺重复购买）
                    新更新：<span>免费催收</span> 和 <span>邀请追评功能</span><br>
                    单链接刷的比例占总销量不要超过30%，特别是新品，还有关键词转化率一定要控制好，关键词转化率在流量纵横——商品流量来源——手淘搜索里查看
                </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <div class="box-card-header" style="background: #b3ffd9;" >登录信息</div>
                </div>
                <div>
                    <p><strong>上次登录IP</strong></p>
                    <p>172.1.1.1</p>
                    <p><strong>上次登录时间</strong></p>
                    2019.11.29
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <div class="box-card-header" style="background: #409EFF;">专属客服</div>
                </div>
                <div>
                    <p>QQ<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=374228740&site=qq&menu=yes"><img style="width: 30px;" src="../../assets/img/timg.jpg"></a></p>
                    <p>微信号：552251</p>
                </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
        activeName: 'second'
    };
  },
  mounted () {
      this.getNotice();
  },
  methods: {
    getNotice () {
        ajaxMy.get("/api/v1/notice").then((res) => {
            console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card__header {
    padding: 0 !important;
}
.box-card-header {
    width: 100%;
    color: #fff;
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
}
</style>
