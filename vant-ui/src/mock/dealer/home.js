
const swipeImages = [
  'https://img.xiaopiu.com/userImages/img633816772b440f8.jpg',
  'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg',
  'https://img.xiaopiu.com/userImages/img633616772b41dd0.jpg',
  'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg',
  'https://img.xiaopiu.com/userImages/img633816772b440f8.jpg',
  'https://img.xiaopiu.com/userImages/img633616772b41dd0.jpg',
  'https://img.xiaopiu.com/userImages/img633416772b3eef0.jpg'
]

const images = [
  {
    url: '/cs',
    label: '理赔进度设置',
    image: '&#xe659;',
    color: '#f85a39'
  }, {
    url: '/qqg',
    label: '推修短信录入',
    image: '&#xe617;',
    color: '#c8b939'
  }, {
    url: '/fs',
    label: '店内理赔查询',
    image: '&#xe62b;',
    color: '#ff5733'
  }, {
    url: '/sx',
    label: '续保任务清单',
    image: '&#xe6f9;',
    color: '#e3780b'
  }, {
    url: '/dj',
    label: '在线报价',
    image: '&#xe681;',
    color: '#ffeb3b'
  }, {
    url: '/jf',
    label: '跟踪结果分类',
    image: '&#xf00d6;',
    color: '#fc8104'
  }, {
    url: '/pin',
    label: '当日续保任务',
    image: '&#xe664;',
    color: '#a5d63f'
  }, {
    url: '/quan',
    label: '我的续保业绩',
    image: '&#xe614;',
    color: '#468d23'
  }, {
    url: '/qian',
    label: '店内业绩查询',
    image: '&#xe619;',
    color: '#57e710'
  }
]

export default {
  // swipe
  getImages: config => {
    return swipeImages
  },

  // 九宫格图片
  getNine: config => {
    return images
  }
}
