<template>
  <div>
    <!-- swipe -->
    <van-swipe :autoplay="3000" style="height: 200px">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-panel title="店端服务">
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li
            v-for="(img, index) in images"
            :key="index"
            class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"
          >
            <router-link :to="img.url">
              <i class="icon iconfont" :style="{color: img.color}" v-html="img.image"></i>
              <div class="mui-media-body">{{img.label}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </van-panel>
  </div>
</template>

<script>
import http from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      swipeImages: [],
      images: []
    }
  },

  created () {
    this.loadSwip()
    this.loadNine()
  },

  methods: {
    loadSwip () {
      http.Get('/dealer/images', {}).then(res => {
        this.swipeImages = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    loadNine () {
      http.Post('/dealer/nine', {}).then(res => {
        this.images = res.data
        // this.$toast('请求成功')
      }).catch(err => {
        console.log(err)
        this.$toast('请求失败')
      })
    },

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

.mui-content>.mui-table-view:first-child {
    margin-top: 0px;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  padding: 10px 0px;
}

.iconfont {
  font-size: 35px;
}

/deep/ .van-panel {
  .van-cell__title {
    flex: none;
  }
}
</style>
