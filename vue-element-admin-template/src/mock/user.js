import Mock from 'mockjs'

let Users = []

for (let i = 0; i < 101; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    userCode: Mock.Random.string('lower', 5, 8),
    userName: Mock.Random.cname(),
    address: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birthday: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export default {
  getUserList: params => {
    // console.log(Users)
    console.log(params)
    // console.log(pp)
    const data = JSON.parse(params.body)
    const userName = data.userName
    const userCode = data.userCode
    const currentPage = data.currentPage
    const pageSize = data.pageSize

    let tmpUsers = Users.filter(user => {
      if (userName && user.userName.indexOf(userName) === -1) {
        return false
      }
      if (userCode && user.userCode.indexOf(userCode) === -1) {
        return false
      }
      return true
    })
    const total = tmpUsers.length
    tmpUsers = tmpUsers.filter((u, index) => {
      return index < currentPage * pageSize && index >= pageSize * (currentPage - 1)
    })
    console.log(tmpUsers)
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('hhha')
    //     resolve([200, {
    //       total: total,
    //       users: tmpUsers
    //     }])
    //   }, 1000)
    // })
    return {
      total: total,
      users: tmpUsers
    }
  },

  editUser: params => {
    const data = JSON.parse(params.body)
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].id === data.id) {
        Users[i] = data
      }
    }
  },

  deleteUser: params => {
    console.log(params)
    const data = JSON.parse(params.body)
    console.log(data)
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].id === data.id) {
        Users.splice(i, 1)
      }
    }
  },

  addUser: params => {
    const data = JSON.parse(params.body)
    data.id = Mock.Random.guid()
    // Users.push(data)
    Users.splice(0, 0, data)
  },

  batchDelete: params => {
    const { ids } = JSON.parse(params.body)
    const idArr = ids.split(',')
    Users = Users.filter(u => !idArr.includes(u.id))
  }
}
