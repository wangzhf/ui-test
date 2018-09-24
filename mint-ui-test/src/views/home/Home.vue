<template>
  <div>
    <mt-header>
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link> -->
      <mt-button slot="left" @click="qrHandler"><i slot="icon" class="iconfont">&#xe69a;</i></mt-button>
      <mt-button slot="title"><i slot="icon" class="iconfont">&#xe60d;</i></mt-button>
      <mt-button slot="right" @click="msgHandler"><i slot="icon" class="iconfont">&#xe60d;</i></mt-button>
    </mt-header>
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <img src="http://img1.imgtn.bdimg.com/it/u=2815577295,345057280&fm=26&gp=0.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img.daimg.com/uploads/allimg/180108/1-1P10QF928.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img1.imgtn.bdimg.com/it/u=2526888032,477149141&fm=11&gp=0.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'Home',
  methods: {
    qrHandler () {
      Toast({
        message: '二维码扫描',
        duration: 2000
      })
    },
    msgHandler () {
      Toast({
        message: '消息',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 150px;
}
.mint-swipe-item {
  overflow: hidden;
}
.mint-swipe-item img {
  width: 100%;
}
.mint-header .mint-header-title {
  padding-top: 6px;
}
.mint-header-button .iconfont {
  font-size: 26px;
}
</style>
