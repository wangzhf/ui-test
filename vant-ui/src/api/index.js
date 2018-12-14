import request from '@/utils/request'

const Get = (url, data) => {
  return request({
    url: url,
    method: 'get',
    params: data
  })
}

const Post = (url, data) => {
  return request({
    url: url,
    method: 'post',
    data: data
  })
}

export default {
  Get,
  Post
}
