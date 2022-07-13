import request from '@/utils/request'

export const getCity = () => {
  return request({
    method: 'GET',
    url: '/area/city',
    params: {
      level: 1
    }
  })
}

export const getHot = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}

export const getInfo = () => {
  return request({
    method: 'GET',
    url: '/area/info',
    params: {
      name: '广州'
    }
  })
}
