import Mock from 'mockjs'
import loginAPI from './login'

Mock.mock(/\/login/, 'post', loginAPI.login)
