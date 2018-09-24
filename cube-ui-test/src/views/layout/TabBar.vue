<template>
  <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    :inline="isInline"
    @click="clickHandler">

    <cube-tab v-for="(item, index) in tabs" :label="index" :key="index">
      <!-- name为icon的插槽 -->
      <i slot="icon" :class="item.icon"></i>
      <!-- 默认插槽 -->
      <p>{{item.txt}}</p>
    </cube-tab>

  </cube-tab-bar>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      isInline: false,
      selectedLabelDefault: 0,
      tabs: [{
        label: '0',
        txt: '首页',
        icon: 'cubeic-home'
      }, {
        label: '1',
        txt: '喜欢',
        icon: 'cubeic-like'
      }, {
        label: '2',
        txt: '会员',
        icon: 'cubeic-vip'
      }, {
        label: '3',
        txt: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  computed: {
    getSelectedLabel () {
      console.log(this.selectedLabelDefault)
    }
  },
  created () {
    let path = this.$route.path
    // 避免返回时tabbar显示错误
    if (path === '/like') {
      this.selectedLabelDefault = 1
    } else if (path === '/vip') {
      this.selectedLabelDefault = 2
    }
  },
  methods: {
    clickHandler (label) {
      console.log(label)
      if (label === 0) {
        this.$router.push({path: '/home'})
      } else if (label === 1) {
        this.$router.push({path: '/like'})
      } else if (label === 2) {
        this.$router.push({path: '/vip'})
      } else if (label === 3) {
        this.$router.push({path: '/me'})
      }
    }
  }
}
</script>

<style>
.cube-tab-bar {
  border-top: 1px solid #d3d3d3;
}
.cube-tab i {
  font-size: 25px;
}
.cube-tab div {
  font-size: 10px;
}
.cube-tab {
  font-size: 10px;
}
</style>

