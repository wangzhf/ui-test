import Mock from 'mockjs'

Mock.Random.extend({
  // 自定义角色生成名称，排除admin
  roleNames: function() {
    const roles = ['FC', 'AM', 'SC', 'FINM', 'FM']
    return this.pick(roles)
  }
})

let Roles = []

Roles.push({
  id: 1,
  roleCode: 'admin',
  roleName: '管理员'
})

for (let i = 0; i < 12; i++) {
  const roleCode = Mock.mock('@roleNames')
  Roles.push(Mock.mock({
    id: Mock.Random.guid(),
    roleCode,
    roleName: getRoleName(roleCode)
  }))
}

function getRoleName(roleCode) {
  let roleName = ''
  switch (roleCode) {
    case 'FC':
      roleName = '金融顾问'
      break
    case 'FM':
      roleName = '财务经理'
      break
    case 'FINM':
      roleName = '金融经理'
      break
    case 'SC':
      roleName = '销售顾问'
      break
    case 'AM':
      roleName = '客户经理'
      break
    default:
      roleName = '未知'
  }
  return roleName
}

export default {
  getRoleList: params => {
    const data = JSON.parse(params.body)
    const roleName = data.roleName
    const roleCode = data.roleCode
    const currentPage = data.currentPage
    const pageSize = data.pageSize

    let tmpRoles = Roles.filter(role => {
      if (roleName && role.roleName.indexOf(roleName) === -1) {
        return false
      }
      if (roleCode && role.roleCode.indexOf(roleCode) === -1) {
        return false
      }
      return true
    })
    const total = tmpRoles.length
    tmpRoles = tmpRoles.filter((u, index) => {
      return index < currentPage * pageSize && index >= pageSize * (currentPage - 1)
    })
    console.log(tmpRoles)
    return {
      total: total,
      roles: tmpRoles
    }
  },

  editRole: params => {
    const data = JSON.parse(params.body)
    for (let i = 0; i < Roles.length; i++) {
      if (Roles[i].id === data.id) {
        Roles[i] = data
      }
    }
  },

  deleteRole: params => {
    const data = JSON.parse(params.body)
    for (let i = 0; i < Roles.length; i++) {
      if (Roles[i].id === data.id) {
        Roles.splice(i, 1)
      }
    }
  },

  addRole: params => {
    const data = JSON.parse(params.body)
    data.id = Mock.Random.guid()
    // Roles.push(data)
    Roles.splice(0, 0, data)
  },

  batchDelete: params => {
    const { ids } = JSON.parse(params.body)
    const idArr = ids.split(',')
    Roles = Roles.filter(u => !idArr.includes(u.id))
  }
}
