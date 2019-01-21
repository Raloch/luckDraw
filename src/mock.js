const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200

const postData = req => {
  let posts = ['99元还款金', '还款金套餐', '9.9元还款金', '1.99元还款金', '0.99元还款金', '3.99元还款金', '办卡还款金', '现金红包', '谢谢参与']
  let array = Mock.mock({
    'prize|1': posts
  })
  let restTimes = Mock.mock({
    'num|+1': 3
  })
  return {
    code,
    posts,
    array,
    restTimes
  }
}

Mock.mock(`${domain}/posts`, 'get', postData)