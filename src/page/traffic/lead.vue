<template>
<div class="container-box">
  <el-card class="box-card">
      <div slot="header" class="clearfix">
          <div class="box-card-header" style="background: #b3ffd9;" >任务导入</div>
      </div>
      <el-upload
        class="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">支持csv,xlsl,xlsm,xls,xltm格式文件</div>
      </el-upload>
  </el-card>
</div>
</template>
<script>
export default {
  data () {
    return {
        activeName: 'second',
        fileList: []
    };
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }
};
</script>

<style lang="css">
</style>
