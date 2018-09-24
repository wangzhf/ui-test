<template>
  <div>
    <router-view></router-view>
    <tab-bar class="tab-bar-cls"></tab-bar>
  </div>
</template>

<script>
import TabBar from './TabBar'
export default {
  name: 'Layout',
  components: {
    TabBar
  }
}
</script>

<style scoped>
.tab-bar-cls {
  bottom: 0px;
  width: 100%;
  position: fixed;
  z-index: 15;
}
</style>
