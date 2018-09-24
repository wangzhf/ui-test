const userMap = {
  a: {
    token: 'xxxxx',
    name: 'hello',
    password: 'b'
  }
}

export default {
  login: config => {
    const { username, password } = JSON.parse(config.body)
    let user = userMap[username]
    if (user && user.password === password) {
      return userMap[username]
    }
    return null
  }
}
