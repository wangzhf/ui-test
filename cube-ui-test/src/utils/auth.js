import Cookies from 'js-cookies'

export function setName (name) {
  return Cookies.setItem('name', name)
}

export function getName () {
  return Cookies.getItem('name')
}

export function setToken (token) {
  return Cookies.setItem('token', token)
}

export function getToken () {
  return Cookies.getItem('token')
}
