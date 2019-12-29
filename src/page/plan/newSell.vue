<template>
<div class="container-box">
  <!-- <el-steps :active="active" finish-status="success">
    <el-step title="第一步"></el-step>
    <el-step title="第二步"></el-step>
  </el-steps> -->
  <el-form :model="formItem" :inline="true" label-width="140px">
    <el-form-item label="请选择任务类型：" v-if="active===0">
      <el-select v-model="formItem.taskType">
        <el-option value="taokouling" label="淘口令流量计划"></el-option>
        <el-option value="realplay" label="直播入口流量计划"></el-option>
        <el-option value="keyword" label="关键词流量计划"></el-option>
        <el-option value="douyin" label="抖音入口流量计划"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button style="margin: 12px 20px 0;" type="success" @click="exportPlan" icon="el-icon-download" size="mini">一键导入计划</el-button>
      <!-- <el-button type="success" style="margin: 0 auto;" size="mini">支付计划</el-button> -->
    </el-form-item>
  </el-form>
  <!--搜素下单 -->
  <div v-if="formItem.taskType === '1'">
      <el-form :model="searchFormItem" :inline="true" label-width="130px">
        <el-form-item label="店铺名称：">
            <el-select v-model="searchFormItem.shop">
              <el-option value="1" label="店铺1"></el-option>
              <el-option value="2" label="店铺2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="计划名称：">
          <el-input type="text" v-model="searchFormItem.planName" placeholder="计划名称"></el-input>
        </el-form-item>
        <el-form-item label="商品链接：">
          <el-input type="text" v-model="searchFormItem.shophref" placeholder="商品链接"></el-input>
        </el-form-item>
        <el-form-item label="商品标题：">
          <el-input type="text" v-model="searchFormItem.shopTitle" placeholder="商品标题"></el-input>
        </el-form-item>
        <el-form-item label="商品ID：">
          <el-input type="text" v-model="searchFormItem.shopid" placeholder="商品ID"></el-input>
        </el-form-item>
        <!--<el-form-item label="店铺名称：">
          <el-input type="text" v-model="searchFormItem.planName" placeholder="商品标题"></el-input>
        </el-form-item> -->
        <el-form-item label="掌柜昵称：">
          <el-input type="text" v-model="searchFormItem.nickname" placeholder="掌柜昵称"></el-input>
        </el-form-item>
        <el-form-item label="搜索展示价格： ￥">
          <el-input type="text" v-model="searchFormItem.price" placeholder="搜索展示价格"></el-input>
        </el-form-item>
        <el-form-item label="付款人数约：">
          <el-input type="text" v-model="searchFormItem.num" placeholder="付款人数"></el-input>
        </el-form-item>
        <el-form-item label="商品所在地：">
          <el-input type="text" v-model="searchFormItem.place" placeholder="商品所在地"></el-input>
        </el-form-item>
        <div class="task_header">
            <el-divider direction="vertical"></el-divider>
            <strong>设置任务信息</strong>
        </div>
        <el-form-item label="拍下单价： ￥">
          <el-input type="text" v-model="searchFormItem.buyPrice" placeholder="付款人数"></el-input>
        </el-form-item>
      </el-form>
      <el-card>
        <el-form :model="searchFormItem" label-width="100px">
          <el-row>
              <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                  <el-form-item label="关键词">
                      <el-input
                        type="textarea"
                        autosize
                        placeholder="请输入关键词"
                        v-model="searchFormItem.cont">
                      </el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                  <el-form-item label="销量任务">
                      <el-input-number v-model="searchFormItem.taskNum"  :min="1"></el-input-number>单
                  </el-form-item>
                  <el-form-item label="每单拍">
                      <el-input-number v-model="searchFormItem.planNum"  :min="1"></el-input-number>件
                  </el-form-item>
              </el-col>
              <el-col :span="8" style="padding-left: 20px">
                 <el-checkbox v-model="searchFormItem.checked">流量任务配单</el-checkbox>
              </el-col>
          </el-row>
        </el-form>
      </el-card>
      <div class="task_header">
          <el-divider direction="vertical"></el-divider>
          <strong>发布时间设置</strong>
      </div>
      <el-form :model="searchFormItem" label-width="100px" :inline="true">
          <div>
              <el-form-item label="设置类型：">
                <el-radio v-model="searchFormItem.settngType" label="1" border>平均分配</el-radio>
                <el-radio v-model="searchFormItem.settngType" label="2" border>手动分配</el-radio>
                <el-radio v-model="searchFormItem.settngType" label="3" border>定时无限制</el-radio>
              </el-form-item>
          </div>
          <div>
              <el-form-item label="日期范围：">
                <el-date-picker
                  v-model="searchFormItem.timeRank"
                  type="datetimerange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                 <el-checkbox v-model="searchFormItem.timeChecked">设置终止计划时间：</el-checkbox>
                 <el-date-picker
                    v-model="searchFormItem.timeEnd"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
              </el-form-item>
          </div>
          <div>
              <el-form-item label="备注说明">
                <el-input
                  type="textarea"
                  autosize
                  placeholder="最多输入60个字"
                  v-model="searchFormItem.exam">
                </el-input>
              </el-form-item>
          </div>
      </el-form>
      <div class="task_header">
          <el-divider direction="vertical"></el-divider>
          <strong>接单设置</strong>
          <span>可按类型设置，不设置则随机分配</span>
      </div>
      <el-form label-width="100px" :inline="true" :model="searchFormItem">
          <div>
              <el-form-item label="任务类型：">
                <el-select v-model="searchFormItem.useType">
                  <el-option value="1" label="仅限销量任务"></el-option>
                  <el-option value="2" label="仅限流量任务"></el-option>
                </el-select>
              </el-form-item>
          </div>
          <div>
              <el-form-item label="投放区域：">
                <el-input type="text" v-model="searchFormItem.selcetPlace" placeholder="投放区域"></el-input>
              </el-form-item>
              <el-form-item label="性别：">
                <el-radio v-model="searchFormItem.sex" label="1">不限</el-radio>
                <el-radio v-model="searchFormItem.sex" label="2">男</el-radio>
                <el-radio v-model="searchFormItem.sex" label="3">女</el-radio>
              </el-form-item>
          </div>
          <div>
              <el-form-item label="年龄：">
                <el-select v-model="searchFormItem.age">
                  <el-option value="all" label="不限"></el-option>
                  <el-option value="2" label="20-30"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="买手信用：">
                <el-select v-model="searchFormItem.xinyong">
                  <el-option value="all" label="不限"></el-option>
                  <el-option value="2" label="20-30"></el-option>
                </el-select>
              </el-form-item>
          </div>
          <div>
            <el-form-item label="选择机型：">
              <el-radio v-model="searchFormItem.phone" label="1">不限</el-radio>
              <el-radio v-model="searchFormItem.phone" label="2">Android</el-radio>
              <el-radio v-model="searchFormItem.phone" label="3">ios</el-radio>
            </el-form-item>
        </div>
      </el-form>
      <div class="task_header">
          <el-divider direction="vertical"></el-divider>
          <strong>预约增权单</strong>
          <span>只有接过店铺流量的买手才能接单下单，若该商品的流量任务完成量较少，则会有一定的延时</span>
      </div>
      <el-form label-width="100px" :inline="true" :model="searchFormItem">
        <el-form-item label="预约增权单">
              <el-radio v-model="searchFormItem.zqCheck" label="1">否</el-radio>
              <el-radio v-model="searchFormItem.zqCheck" label="2">是</el-radio>
        </el-form-item>
      </el-form>
  </div>
  <!--二维码 -->
  <div v-if="formItem.taskType === '4'">
    <div class="task_header">
        <el-divider direction="vertical"></el-divider>
        <strong>设置任务信息</strong>
    </div>
        <el-form :model="ewmFormItem" label-width="100px">
          <el-form-item label="拍下单价： ￥">
            <el-input type="text" v-model="ewmFormItem.buyPrice"></el-input>
          </el-form-item>
          <el-card>
            <el-row>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="二维码">
                        <el-upload
                            class="upload-demo"
                            :action="pic.actionUrl"
                            accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.PBG,.GIF,.BMP"
                            :on-success="handleAvatarSuccess"
                            :show-file-list="false">
                            <el-button size="small" type="primary">点击上传二维码</el-button>
                        </el-upload>
                        <img :src='$store.state.common.url+pic.url'>
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="销量任务">
                        <el-input-number v-model="ewmFormItem.taskNum"  :min="1"></el-input-number>单
                    </el-form-item>
                    <el-form-item label="每单拍">
                        <el-input-number v-model="ewmFormItem.planNum"  :min="1"></el-input-number>件
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-left: 20px">
                  <el-checkbox v-model="ewmFormItem.checked">流量任务配单</el-checkbox>
                </el-col>
            </el-row>
        </el-card>
    </el-form>
  </div>
  <!--直播 -->
  <div v-if="formItem.taskType === '5'">
    <div class="task_header">
        <el-divider direction="vertical"></el-divider>
        <strong>设置任务信息</strong>
    </div>
        <el-form :model="zbFormItem" label-width="100px">
          <el-form-item label="拍下单价： ￥">
            <el-input type="text" v-model="zbFormItem.buyPrice"></el-input>
          </el-form-item>
          <el-card>
            <el-row>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="直播入口">
                        <el-input type="text" v-model="zbFormItem.enter"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="销量任务">
                        <el-input-number v-model="zbFormItem.taskNum"  :min="1"></el-input-number>单
                    </el-form-item>
                    <el-form-item label="每单拍">
                        <el-input-number v-model="zbFormItem.planNum"  :min="1"></el-input-number>件
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-left: 20px">
                  <el-checkbox v-model="zbFormItem.checked">流量任务配单</el-checkbox>
                </el-col>
            </el-row>
        </el-card>
    </el-form>
  </div>
  <!--抖音 -->
  <div v-if="formItem.taskType === '6'">
    <div class="task_header">
        <el-divider direction="vertical"></el-divider>
        <strong>设置任务信息</strong>
    </div>
        <el-form :model="dyFormItem" label-width="100px">
          <el-form-item label="拍下单价： ￥">
            <el-input type="text" v-model="dyFormItem.buyPrice"></el-input>
          </el-form-item>
          <el-card>
            <el-row>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="抖音入口">
                        <el-input type="text" v-model="dyFormItem.enter"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-right: 10px;border-right: 1px dashed #333">
                    <el-form-item label="销量任务">
                        <el-input-number v-model="dyFormItem.taskNum"  :min="1"></el-input-number>单
                    </el-form-item>
                    <el-form-item label="每单拍">
                        <el-input-number v-model="dyFormItem.planNum"  :min="1"></el-input-number>件
                    </el-form-item>
                </el-col>
                <el-col :span="8" style="padding-left: 20px">
                  <el-checkbox v-model="dyFormItem.checked">流量任务配单</el-checkbox>
                </el-col>
            </el-row>
        </el-card>
    </el-form>
  </div>
  <el-dialog title="导入计划" :visible.sync="exportModel" width="40%">
    <div>
      <el-upload class="upload-demo" drag :action="pic.actionUrl" accept=".xlsx" :headers="pic.headers">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <div class="export_exm">发布销量任务模版 <span @click="exportExam">下载模版</span></div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="exportModel = false">取 消</el-button>
      <el-button type="primary" @click="exportModel = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>
<script>
// import ajaxMy from "@/config/request.js";
export default {
  data () {
    return {
        active: 1,
        formItem: {
          taskType: "taokouling"
        },
        searchFormItem: {
          shop: "1",
          id: "",
          planName: "",
          shophref: "",
          shopTitle: "",
          shopid: "",
          nickname: "",
          price: "",
          num: "",
          place: "",
          buyPrice: "",
          checked: false,
          cont: "",
          planNum: 1,
          taskNum: 1,
          settngType: "1",
          timeRank: null,
          timeChecked: false,
          timeEnd: null,
          exam: "",
          useType: "1",
          selcetPlace: "",
          sex: "",
          age: "",
          xinyong: "",
          phone: "",
          zqCheck: "1"
        },
        ewmFormItem: {
          buyPrice: "",
          taskNum: 1,
          planNum: 1,
          checked: false
        },
        zbFormItem: {
          buyPrice: "",
          enter: "",
          taskNum: 1,
          planNum: 1,
          checked: false
        },
        dyFormItem: {
          buyPrice: "",
          enter: "",
          taskNum: 1,
          planNum: 1,
          checked: false
        },
        exportModel: false,
        pic: {
          headers: {
            Authorization: sessionStorage.getItem("AUTH_TOOKEN")
          },
          actionUrl: "",
          url: ""
        }
    };
  },
  methods: {
    exportPlan () {
      this.pic.actionUrl = this.$store.state.common.url + "/api/v1/sale_task/upload";
      this.exportModel = true;
    },
    exportExam () {
      window.open(this.$store.state.common.url + "/api/v1/file/download/templete/sale_task");
    },
    handleAvatarSuccess (res, file) {
      this.pic.url = res.result.url;
    }
  }
};
</script>

<style lang="scss" scoped>
  .export_exm {
    margin-top: 10px;
    span {
      text-decoration: underline;
      color: red;
    }
  }
  .task_header {
    strong {
      font-size: 20px;
    }
    span {
      margin-left: 10px;
      color: red;
    }
  }
</style>
