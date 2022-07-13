import request from '@/utils/request'

export const getImg = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

export const getHousel = () => {
  return request({
    method: 'GET',
    url: '/home/groups'
  })
}
