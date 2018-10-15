<template>
  <div class="content-container">
    <el-row slot="body" :gutter="24" class="tree-area">
      <el-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" style="margin-bottom: 20px">
        <el-input v-model="filterText" placeholder="请输入关键字过滤" />
        <el-tree
          :data="resourceList"
          :expand-on-click-node="false"
          :render-content="renderContent"
          :label="showTreeLabel"
        />
      </el-col>
      <el-col :span="18" :xs="24" :sm="24" :md="18" :lg="18">
        <el-card class="box-card">
          <!--<div slot="header" class="clearfix">-->
          <!--<el-button type="primary" style="float: right" @click="dialogFormVisible = true"><i class="el-icon-plus"></i></el-button>-->
          <!--&lt!&ndash<el-button type="primary" @click="editSelectedMenu" icon="edit"></el-button>&ndash&gt-->
          <!--&lt!&ndash<el-button type="primary" @click="deleteSelectedMenu" icon="delete"></el-button>&ndash&gt-->
          <!--</div>-->
          <div slot="header">hello</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as resourceAPI from '@/api/system/resource'

export default {
  name: 'ResourceManager',
  data() {
    return {
      filterText: '',
      resourceList: []
    }
  },
  created() {
    this.loadResourceList()
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.name}</span>
        </span>
      )
    },
    loadResourceList() {
      resourceAPI.listResource().then(res => {
        console.log(res.data)
        this.resourceList = res.data
      })
    },
    showTreeLabel(data, node) {
      console.log('showTree label')
      console.log(data)
      console.log(node)
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

</style>
