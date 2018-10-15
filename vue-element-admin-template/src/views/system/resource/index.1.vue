<template>
  <div class="content-container">
    <el-row slot="body" :gutter="24" class="tree-area">
      <el-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" style="margin-bottom: 20px">
        <el-tree
          v-if="resourceTree"
          ref="resourceTree"
          :data="resourceTree"
          :render-content="renderContent"
          :props="defaultProps"
          show-checkbox
          highlight-current
          node-key="id"
          clearable
          @node-click="handleNodeClick"
        />
      </el-col>
      <el-col :span="18" :xs="24" :sm="24" :md="18" :lg="18">
        <el-card class="box-card">
          <!--<div slot="header" class="clearfix">-->
          <!--<el-button type="primary" style="float: right" @click="dialogFormVisible = true"><i class="el-icon-plus"></i></el-button>-->
          <!--&lt!&ndash<el-button type="primary" @click="editSelectedMenu" icon="edit"></el-button>&ndash&gt-->
          <!--&lt!&ndash<el-button type="primary" @click="deleteSelectedMenu" icon="delete"></el-button>&ndash&gt-->
          <!--</div>-->
          <div class="text item">
            <el-form ref="form" :model="form">
              <el-form-item :label-width="formLabelWidth" label="父级">
                <!--<el-input v-model="form.parentId" auto-complete="off"></el-input>-->
                <el-select-tree
                  :tree-data="resourceTree"
                  :prop-names="defaultProps"
                  v-model="form.parentId"
                  clearable
                  placeholder="请选择父级" />
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="名称">
                <el-input v-model="form.name" auto-complete="off" />
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="代码">
                <el-input v-model="form.code" auto-complete="off" />
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="类型">
                <el-radio v-model="form.type" :label="1" class="radio">菜单</el-radio>
                <el-radio v-model="form.type" :label="2" class="radio">按钮</el-radio>
                <el-radio v-model="form.type" :label="3" class="radio">功能</el-radio>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="是否生效">
                <el-radio v-model="form.usable" class="radio" label="1">是</el-radio>
                <el-radio v-model="form.usable" class="radio" label="0">否</el-radio>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="排序">
                <el-slider v-model="form.sort" />
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="备注">
                <el-input v-model="form.remarks" auto-complete="off" />
              </el-form-item>
              <el-form-item :label-width="formLabelWidth" label="">
                <el-button type="primary" @click="onSubmit" v-text="form.id?'修改':'新增'" />
                <el-button v-show="form.id && form.id!=null" icon="delete" type="danger" @click="deleteSelected">删除
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import selectTree from '@/components/Tree/selectTree.vue'
import treeter from '@/components/Tree/treeter'
import merge from 'element-ui/src/utils/merge'
import * as resourceAPI from '@/api/system/resource'

export default {
  name: 'ResourceManager',

  components: {
    'el-select-tree': selectTree
  },
  mixins: [treeter],
  data() {
    return {
      formLabelWidth: '100px',
      defaultProps: {
        children: 'children',
        label: 'name',
        id: 'id'
      },
      resourceTree: [],
      maxId: 700000,
      form: {
        id: null,
        parentId: null,
        name: '',
        code: '',
        type: 1,
        sort: 0,
        usable: '1',
        remarks: ''
      }
    }
  },
  created() {
    this.load()
  },
  methods: {
    newAdd() {
      this.form = {
        id: null,
        parentId: null,
        name: '',
        code: '',
        type: 1,
        sort: 0,
        usable: '1',
        remarks: ''
      }
    },
    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
        </span>)
    },
    deleteSelected() {
      const params = { resIds: this.form.id }
      resourceAPI.deleteResource(params).then(res => {
        this.$message('操作成功')
        this.deleteFromTree(this.resourceTree, this.form.id)
        this.newAdd()
      }).catch(err => {
        console.log(err)
        this.$message('操作失败')
      })
    },
    batchDelete() {
      var checkKeys = this.$refs.resourceTree.getCheckedKeys()
      if (checkKeys == null || checkKeys.length <= 0) {
        this.$message.warning('请选择要删除的资源')
        return
      }
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = { resId: checkKeys.join(',') }
        resourceAPI.deleteResource(params).then(res => {
          this.$message('操作成功')
          this.load()
        }).catch(err => {
          this.$message('操作成功')
          console.log(checkKeys)
          console.log(err)
          this.batchDeleteFromTree(this.resourceTree, checkKeys)
        })
      })
    },
    handleNodeClick(data) {
      this.form = merge({}, data)
    },
    onSubmit() {
      if (this.form.id == null) {
        resourceAPI.addResource(this.form).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.form.id = res.data.id
          this.appendTreeNode(this.resourceTree, res.data)
        }).catch(err => {
          console.log(err)
          this.maxId += 1
          this.$message({
            message: '操作失败',
            type: 'error'
          })
          this.form.id = this.maxId
          var ddd = {
            id: this.form.id,
            name: this.form.name,
            sort: this.form.sort,
            type: this.form.type,
            code: this.form.code,
            remarks: this.form.remarks,
            parentId: this.form.parentId,
            usable: this.form.usable,
            children: []
          }
          this.appendTreeNode(this.resourceTree, ddd)
          this.resourceTree.push({})
          this.resourceTree.pop()
        })
      } else {
        resourceAPI.updateResource(this.form).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.updateTreeNode(this.resourceTree, res.data)
        }).catch(err => {
          console.log(err)
          this.$message({
            message: '操作失败',
            type: 'error'
          })
          this.updateTreeNode(this.resourceTree, merge({}, this.form))
        })
      }
    },
    load() {
      resourceAPI.listResource().then(res => {
        console.log(res)
        this.resourceTree = []
        this.resourceTree.push(...res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-area {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;
  font-size: 14px;

  .el-tree {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 10px 0;
    border-radius: 4px;

    .el-tree-node__content>.el-tree-node__expand-icon {
      font-size: 20px;
    }
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
