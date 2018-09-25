<template>
  <div>
    <mt-header>
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link> -->
      <mt-button slot="left" @click="qrHandler"><i slot="icon" class="iconfont">&#xe69a;</i></mt-button>
      <router-link slot="left" :to="{path: '/search', query: {content: recommendContent}}"><h1 class="header-title">{{recommendContent}}</h1></router-link>
      <mt-button slot="right" @click="msgHandler">
        <i slot="icon" class="iconfont">
          &#xe60d;
        </i>
      </mt-button>
      <mt-badge slot="right" size="small" color="red">99+</mt-badge>
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
  data () {
    return {
      recommendContent: '荣耀超级新品日 笔记本0元抢'
    }
  },
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
    },
    searchHandler () {
      this.$router.push({path: '/search', query: {content: this.recommendContent}})
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
.mint-header-button.is-right .mint-button {
  position: absolute;
  top: 0;
  right: 10px;
}
.mint-header-button .mint-badge {
  /* height: 40px; */
  position: absolute;
  right: 0px;
  top: 2px;
  padding: 0px 4px;
}
.mint-header-button.is-left .mint-button {
  position: absolute;
  top: 0;
  left: 10px;
}

</style>
