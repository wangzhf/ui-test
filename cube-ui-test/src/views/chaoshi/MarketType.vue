<template>
  <cube-page type="scroll-nav-side" title="京东超市-分类" hasBack="true">
    <div slot="content">
      <div class="view-wrapper">
        <cube-scroll-nav
          :side="true"
          :data="data"
          :current="current"
          @change="changeHandler"
          @sticky-change="stickyChangeHandler">
          <ul class="prepend-header" slot="prepend">
          </ul>
          <cube-scroll-nav-panel
            v-for="item in data"
            :key="item.name"
            :label="item.name"
            :title="item.name">
            <ul>
              <li v-for="(food, index) in item.foods" :key="index">
                <div>
                  <img :src="food.icon" :preview="index" :preview-text="food.name" @click="handleImgsClick(food.icon)">
                  <p>{{food.name}}</p>
                </div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </cube-scroll-nav>
      </div>
    </div>
  </cube-page>
</template>

<script>
import CubePage from '@/components/CubePage'

import goodsData from '../../../static/data/goods-list.json'

// use vue-photo-preview to preview img
import Vue from 'vue'
import vuePhotoPreview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var options = {
  fullscreenEl: false // 关闭全屏按钮
}
Vue.use(vuePhotoPreview, options)

const goods = goodsData.goods

export default {
  name: 'MarketType',
  components: {
    CubePage
  },
  data () {
    return {
      data: goods,
      current: goods[0].name
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    },
    handleImgsClick (url) {
      // cube-ui 默认图片预览
      // const params = {
      //   $props: {
      //     imgs: [url],
      //     initialIndex: 0,
      //     loop: false
      //   },
      //   $events: {
      //     change: (i) => {
      //       this.initialIndex = i
      //     }
      //   }
      // }
      // this.$createImagePreview({...params}).show()
    }
  },
  mounted () {
    this.$previewRefresh()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll-nav-side
    background-color: #fff
    .view-wrapper
      position: fixed
      top: 44px
      left: 0
      bottom: 0
      width: 100%
    .prepend-header
      width: 90%
      margin: 20px auto
      text-align: center
      font-size: 20px
      line-height: 1.6
      border-radius: 2px
      box-shadow: 0 0 4px rgba(0, 0, 0, .2)
    .cube-scroll-nav-main
      background-color: #efeff4
    .cube-sticky-fixed
      background-color: #efeff4
    .cube-scroll-nav-bar
      width: 120px
      background-color: transparent
    .cube-scroll-nav-bar-item
      padding: 15px
    .cube-scroll-nav-bar-item_active
      background-color: #fff
    .cube-scroll-nav-panels
      background-color: #fff
    .cube-scroll-nav-panel
      img
        width: 100px
        height: 114px
      ul
        overflow: hidden
        font-size: 14px
        line-height: 1.4
        color: #666
      li
        float: left
        width: 50%
        text-align: center
        div
          width: 114px
          margin: auto
          p
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
    .cube-scroll-nav-panel-title
      padding: 15px
      font-size: 16px
      background-color: #fff
</style>
