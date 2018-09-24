<template>
  <cube-page type="tabs-basic-view form-custom" title="登录" hasBack="true">
    <div slot="content">
      <cube-tab-bar v-model="selectedLabel" showSlider>
        <cube-tab v-for="(item, index) in tabs" :label="index" :key="index">{{item.label}}</cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="index">
          <div v-if="selectedLabel == 0">
            <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
              <cube-form-group>
                <cube-form-item :field="fields[0]"></cube-form-item>
                <cube-form-item :field="fields[1]"></cube-form-item>
              </cube-form-group>
              <cube-form-group>
                <cube-button type="button" @click="handleLogin">登录</cube-button>
              </cube-form-group>
            </cube-form>
          </div>
          <div v-else>
            1
          </div>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </cube-page>
</template>

<script>
import CubePage from '@/components/CubePage'

// eslint-disable-next-line
import Vue from 'vue'
// eslint-disable-next-line
const InputPassword = Vue.component('input-password', {
  props: ['password'],
  data () {
    return {

    }
  },
  computed: {
    apassword () {
      console.log(this.password)
    }
  },
  template: `
    <div class="cube-input">
      <input type="password" :value="password" placeholder="请输入" class="cube-input-field">
    </div>
  `
})

export default {
  name: 'Login',
  components: {
    CubePage
  },
  data () {
    return {
      selectedLabel: 0,
      tabs: [{
        label: '账号密码登录'
      }, {
        label: '短信验证码登录'
      }],
      validity: {},
      valid: undefined,
      model: {
        username: '',
        password: ''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'username',
          label: '账号',
          props: {
            placeholder: '请输入'
          },
          rules: {
            required: true
          }
        }, {
          // component: InputPassword,
          type: 'input',
          modelKey: 'password',
          label: '密码',
          props: {
            placeholder: '请输入'
          },
          rules: {
            required: true
          }
        }
      ],
      redirect: undefined
    }
  },
  watch: {
    selectedLabel (newV) {
      console.log(newV)
    },
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      }
    }
  },
  methods: {
    submitHandler (e) {
      // 页面不跳转
      return false
    },
    handleLogin () {
      let vm = this
      // login
      this.$store.dispatch('Login', this.model).then(() => {
        this.$router.push({path: vm.redirect ? vm.redirect : '/'})
      }).catch(err => {
        console.dir(err.message)
        vm.$createToast({
          txt: err.message,
          type: 'error'
        }).show()
      })
    },
    validateHandler (result) {
      this.validity = result.validity
      this.valid = result.valid
      // console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      // console.log(this.model.username + ', ' + this.model.password)
      // console.log(this.redirect)
      // console.log(this.$route.query)
      // console.log(this.$route.query.redirect)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabs-basic-view
    .cube-tab-bar
      background-color: #fff
      height: 45px
      padding-top 10px
    .cube-tab-panels
      background-color: #fff
      height: 100%
      width: 100%
      buttom: 0
      position fixed

  .form-custom
    .cube-form-group
      .cube-form-group-content
        align: center
        margin-top: 10px
        .cube-btn
          width: 50%
          height: 40px
          padding: 15px 15px
          margin: auto
</style>
