import request from '@/utils/request'
// export const getHouseId = () => {
//   return request({
//     method: 'POST',
//     url: '/area/info',
//     params: {
//       name: this.$store.state.data
//     }
//   })
// }
/**
 *
 * @param {获取城市的信息} cityld
 * @returns
 */
export const getHouselImg = (params) => {
  return request({
    method: 'GET',
    url: '/houses',
    params
  })
}
