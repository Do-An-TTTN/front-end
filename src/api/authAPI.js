import axiosClient from '~/api/axiosClient'

const authAPI = {
  logIn: (data) => {
    const url = '/api/auth/login'
    return axiosClient.post(url, data)
  },
  register: (data) => {
    const url = '/api/auth/register'
    return axiosClient.post(url, data)
  },
  logOut: () => {
    const url = '/api/auth/logout'
    return axiosClient.post(url)
  }
}
export default authAPI
