<template>
  <cube-page type="toobar" title="Cube-ui test" class="option-demo" hasBack="false">
    <div slot="content">
      <cube-slide :data="items"/>

      <div class="content-container">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="box"
          @click="goToContent(img.url)"
        >
          <img :src="img.image" alt="">
          <p>{{img.label}}</p>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script>
import CubePage from '@/components/CubePage'

export default {
  name: 'Home',
  components: {
    CubePage
  },
  data () {
    return {
      defaultNine: '',
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ],
      images: [
        {
          url: '/cs',
          label: '京东超市',
          image: '/static/images/jd-chaoshi.png.webp'
        }, {
          url: '/qqg',
          label: '全球购',
          image: '/static/images/jd-quanqiugou.png.webp'
        }, {
          url: '/fs',
          label: '京东服饰',
          image: '/static/images/jd-fushi.png.webp'
        }, {
          url: '/sx',
          label: '京东生鲜',
          image: '/static/images/jd-shengxian.png.webp'
        }, {
          url: '/dj',
          label: '京东到家',
          image: '/static/images/jd-daojia.png.webp'
        }, {
          url: '/jf',
          label: '充值缴费',
          image: '/static/images/jd-jiaofei.png.webp'
        }, {
          url: '/pin',
          label: '9.9元拼',
          image: '/static/images/jd-9.9.png.webp'
        }, {
          url: '/quan',
          label: '领券',
          image: '/static/images/jd-quan.png.webp'
        }, {
          url: '/qian',
          label: '赚钱',
          image: '/static/images/jd-qian.png.webp'
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

<style>
.content-container {
  background-color: #fff;
  width: 100%;
  padding-left: 0.5%;
  padding-top: 0.5%;
}
.content-container .box {
  width: 30%;
  border-radius: 3%;
  float: left;
  text-align: center;
  margin: 1%;
  position: relative;
}
.content-container img {
  margin-top: .5rem;
  width: 2rem;
}
.content-container p {
  margin-top: .3rem;
  font-size: .6rem;
  color: #666;
}
</style>
