<template>
  <div>
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-search
      v-model="value"
      cancel-text="取消"
      show
      autofocus
      >
    </mt-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: this.$route.query['content']
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style>
.mint-search .mint-searchbar-core {
  font-weight: 400;
  margin-left: 10px;
}
.mint-search .mint-search-list {
  top: 45px;
}
</style>
