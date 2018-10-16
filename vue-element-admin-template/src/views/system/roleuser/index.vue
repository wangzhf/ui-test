<template>
  <div class="content-container">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form ref="form1" inline>
              <el-form-item label="用户">
                <el-input
                  size="small"
                  placeholder="输入关键字进行过滤"
                />
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="2">
            <el-button size="small" type="primary" v-text="'查找'" />
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-table
              :data="tableData"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="姓名"
              />
            </el-table>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form ref="form2" inline>
              <el-form-item label="角色">
                <el-input
                  size="small"
                  placeholder="输入关键字进行过滤"
                />
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="2">
            <el-button size="small" type="primary" v-text="'查找'" />
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-table
              :data="tableData"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="姓名"
              />
            </el-table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'RoleUserManager',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  .el-table {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 10px 0;
    border-radius: 4px;
  }
}
</style>
