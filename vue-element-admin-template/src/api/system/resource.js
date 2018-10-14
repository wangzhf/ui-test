import request from '@/utils/request'

export const listResource = params => {
  return request({
    url: '/resource/list',
    method: 'post',
    data: params
  })
}

export const deleteResource = params => {
  return request({
    url: '/resource/delete',
    method: 'post',
    data: params
  })
}

export const addResource = params => {
  return request({
    url: '/resource/add',
    method: 'post',
    data: params
  })
}

export const updateResource = params => {
  return request({
    url: '/resource/update',
    method: 'post',
    data: params
  })
}
