import request from '@/utils/request'

export const getUserList = params => {
  return request({
    url: '/user/userList',
    method: 'post',
    data: params
  })
}

export const editUser = params => {
  return request({
    url: '/user/edit',
    method: 'post',
    data: params
  })
}

export const deleteUser = params => {
  return request({
    url: '/user/delete',
    method: 'post',
    data: params
  })
}

export const addUser = params => {
  return request({
    url: '/user/add',
    method: 'post',
    data: params
  })
}

export const batchDeleteUser = params => {
  return request({
    url: '/user/batchDelete',
    method: 'post',
    data: params
  })
}
