<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="0">
        <i slot="icon" class="iconfont">&#xe6e2;</i>
        首页
      </mt-tab-item>
      <mt-tab-item id="1">
        <i slot="icon" class="iconfont">&#xe7f9;</i>
        分类
      </mt-tab-item>
      <mt-tab-item id="2">
        <i slot="icon" class="iconfont">&#xe64d;</i>
        发现
      </mt-tab-item>
      <mt-tab-item id="3">
        <i slot="icon" class="iconfont">&#xe648;</i>
        购物车
      </mt-tab-item>
      <mt-tab-item id="4">
        <i slot="icon" class="iconfont">&#xf030d;</i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import Home from '../home/Home'
export default {
  name: 'Layout',
  data () {
    return {
      selected: '0'
    }
  },
  created () {
    var path = this.$route.path
    console.log(this.$route)
    if (path === '/home') {
      this.selected = '0'
    } else if (path === '/category') {
      this.selected = '1'
    } else if (path === '/find') {
      this.selected = '2'
    } else if (path === '/shopcart') {
      this.selected = '3'
    } else if (path === '/me') {
      this.selected = '4'
    }
  },
  watch: {
    selected (val, oldVal) {
      if (val === '0') {
        this.$router.push({path: '/home'})
      } else if (val === '1') {
        this.$router.push({path: '/category'})
      } else if (val === '2') {
        this.$router.push({path: '/find'})
      } else if (val === '3') {
        this.$router.push({path: '/shopcart'})
      } else if (val === '4') {
        this.$router.push({path: '/me'})
      }
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 20px;
}
</style>
