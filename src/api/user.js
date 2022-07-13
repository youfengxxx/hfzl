import request from '@/utils/request'

export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

export const getName = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6NiwiaWF0IjoxNTU1OTIyMjU4LCJleHAiOjE1OTE5MTg2NTh9.Z967JTclvj2ldAXDhAX6SHTgY3iB2Z-qCJ1-cYimwJM'
    }
  })
}
