import axiosClient from '~/api/axiosClient'

const authAPI = {
  logIn: (data) => {
    const url = '/auth/login'
    return axiosClient.post(url, data)
  },
  register: (data) => {
    const url = '/auth/register'
    return axiosClient.post(url, data)
  },
  logOut: () => {
    const url = '/auth/logout'
    return axiosClient.post(url)
  }
}
export default authAPI
