<template>
  <div>
    <!-- swipe -->
    <van-swipe :autoplay="3000" style="height: 200px">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-panel title="店端服务">
      <div class="content-container">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="box van-hairline--surround"
          @click="goToContent(img.url)"
        >
          <i class="icon iconfont" v-html="img.image"></i>
          <p>{{img.label}}</p>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload, {})

export default {
  name: 'Home',
  data () {
    return {
      swipeImages: [
        'https://img.xiaopiu.com/userImages/img633816772b440f8.jpg',
        'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg',
        'https://img.xiaopiu.com/userImages/img633616772b41dd0.jpg',
        'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg',
        'https://img.xiaopiu.com/userImages/img633816772b440f8.jpg',
        'https://img.xiaopiu.com/userImages/img633616772b41dd0.jpg',
        'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg'
      ],
      images: [
        {
          url: '/cs',
          label: '理赔进度设置',
          image: '&#xe659;'
        }, {
          url: '/qqg',
          label: '推修短信录入',
          image: '&#xe617;'
        }, {
          url: '/fs',
          label: '店内理赔查询',
          image: '&#xe62b;'
        }, {
          url: '/sx',
          label: '续保任务清单',
          image: '&#xe6f9;'
        }, {
          url: '/dj',
          label: '在线报价',
          image: '&#xe681;'
        }, {
          url: '/jf',
          label: '跟踪结果分类',
          image: '&#xf00d6;'
        }, {
          url: '/pin',
          label: '当日续保任务',
          image: '&#xe664;'
        }, {
          url: '/quan',
          label: '我的续保业绩',
          image: '&#xe614;'
        }, {
          url: '/qian',
          label: '店内业绩查询',
          image: '&#xe619;'
        }
      ]
    }
  },

  methods: {
    goToContent (path) {
      if (path === '/cs') {
        this.$router.push({path: '/cs'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content-container {
  background-color: #fff;
  width: 100%;
  padding-left: 0.5%;
  padding-top: 0.5%;
  margin-left: 1%;
  margin-right: 1%;
}
.content-container .box {
  width: 32%;
  border-radius: 2%;
  float: left;
  text-align: center;
  position: relative;
}
.content-container .iconfont {
  margin-top: 5px;
  font-size: 30px;
  color: chocolate;
}
.content-container p {
  margin-top: .3rem;
  font-size: .6rem;
  color: #666;
}

/deep/ .van-panel {
  .van-cell__title {
    flex: none;
  }
}
</style>
