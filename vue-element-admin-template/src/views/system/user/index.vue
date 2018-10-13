<template>
  <div class="content-container">
    <el-form ref="form" :inline="true" :model="userInfo" label-width="80px" size="mini">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户姓名">
            <el-input v-model="userInfo.userName" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户代码">
            <el-input v-model="userInfo.userCode" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button :disabled="disabledBatchBtn" type="primary" size="mini" @click="batchDelete">批量删除</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="userList"
      :border="true"
      :highlight-current-row="true"
      tooltip-effect="dark"
      class="tab-container"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" width="40" />
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="userName" label="姓名" width="80" sortable />
      <el-table-column prop="userCode" label="代码" width="80" sortable />
      <el-table-column :formatter="formatSex" prop="sex" label="性别" width="70" sortable />
      <el-table-column prop="age" label="年龄" width="80" sortable />
      <el-table-column prop="birthday" label="生日" width="120" sortable />
      <el-table-column prop="address" label="地址" sortable />
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        style="float: right;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <!--编辑界面-->
    <el-dialog :visible.sync="editFormVisible" :close-on-click-modal="false" title="编辑">
      <el-form ref="editForm" :model="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="editForm.userName" auto-complete="off" />
        </el-form-item>
        <el-form-item label="代码">
          <el-input v-model="editForm.userCode" auto-complete="off" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio :label="1" class="radio">男</el-radio>
            <el-radio :label="0" class="radio">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="200" />
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="editForm.birthday" type="date" placeholder="选择日期" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="editForm.address" type="textarea" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>

    <!--新增界面-->
    <el-dialog :visible.sync="addFormVisible" :close-on-click-modal="false" title="新增">
      <el-form ref="addForm" :model="addForm" :rules="addFormRules" label-width="80px">
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="addForm.userName" auto-complete="off" />
        </el-form-item>
        <el-form-item label="代码">
          <el-input v-model="addForm.userCode" auto-complete="off" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="addForm.sex">
            <el-radio :label="1" class="radio">男</el-radio>
            <el-radio :label="0" class="radio">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="addForm.age" :min="0" :max="200" />
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="addForm.birthday" type="date" placeholder="选择日期" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="addForm.address" type="textarea" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList, editUser, deleteUser, addUser, batchDeleteUser } from '@/api/user'
import { parseTime } from '@/utils'

export default {
  name: 'UserManager',
  data() {
    return {
      userInfo: {
        userName: '',
        userCode: ''
      },
      userList: [],
      multipleSelection: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,

      // 编辑界面是否显示
      editFormVisible: false,
      editFormRules: {
        userName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      // 编辑界面数据
      editForm: {
        id: 0,
        userName: '',
        userCode: '',
        sex: -1,
        age: 0,
        birthday: '',
        address: ''
      },

      // 新增界面是否显示
      addFormVisible: false,
      addFormRules: {
        userName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      // 新增界面数据
      addForm: {
        userName: '',
        userCode: '',
        sex: -1,
        age: 0,
        birthday: '',
        address: ''
      }
    }
  },
  computed: {
    disabledBatchBtn() {
      return this.multipleSelection.length === 0
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    search() {
      this.getUser()
    },
    getUser() {
      const param = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        userName: this.userInfo.userName,
        userCode: this.userInfo.userCode
      }
      getUserList(param).then((res) => {
        console.log(res)
        this.userList = res.data.users
        this.total = res.data.total
      })
    },
    // 性别显示转换
    formatSex: function(row, column) {
      return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleEdit(index, row) {
      this.editFormVisible = true
      this.editForm = Object.assign({}, row)
    },
    handleDelete(index, row) {
      this.$confirm('确认删除该记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        const param = { id: row.id }
        deleteUser(param).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getUser()
        })
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getUser()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getUser()
    },
    // 新增
    handleAdd() {
      this.addFormVisible = true
      this.addForm = {
        userName: '',
        userCode: '',
        sex: -1,
        age: 0,
        birthday: '',
        address: ''
      }
    },
    // 编辑
    editSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            const param = Object.assign({}, this.editForm)
            param.birthday = parseTime(param.birthday, '{y}-{m}-{d}')
            editUser(param).then(res => {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.$refs['editForm'].resetFields()
              this.editFormVisible = false
              this.getUser()
            })
          })
        }
      })
    },
    addSubmit() {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            const param = Object.assign({}, this.addForm)
            param.birthday = parseTime(param.birthday, '{y}-{m}-{d}')
            addUser(param).then(res => {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$refs['addForm'].resetFields()
              this.addFormVisible = false
              this.getUser()
            })
          })
        }
      })
    },
    // 批量删除
    batchDelete() {
      const ids = this.multipleSelection.map(item => item.id).toString()
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        const param = { ids: ids }
        batchDeleteUser(param).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getUser()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-container{
  margin-top: 20px;
}
.page-block {
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 100px;

}
</style>
