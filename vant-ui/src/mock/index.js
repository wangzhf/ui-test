import Mock from 'mockjs'
import dealerHomeAPI from './dealer/home'

Mock.setup({
  timeout: '350-600'
})

// 模拟数据加载
Mock.mock(/\/dealer\/images\.*/, 'get', dealerHomeAPI.getImages)
Mock.mock(/\/dealer\/nine\.*/, 'post', dealerHomeAPI.getNine)
