import axiosClient from '~/api/axiosClient'

const bannerAPI = {
  getAllBanners: () => {
    const url = '/api/banner'
    return axiosClient.get(url)
  },
  deleteBanner: (id) => {
    const url = `/api/banner/${id}`
    return axiosClient.delete(url)
  },
  updateUser: (id, data) => {
    const url = `/api/auth/${id}`
    return axiosClient.put(url, data)
  },
  updatePass: (id, data) => {
    const url = `/api/auth/change-password/${id}`
    return axiosClient.post(url, data)
  },
  getInfor: () => {
    const url = '/api/infor'
    return axiosClient.get(url)
  },
  updateInfor: (id, data) => {
    const url = `/api/infor/${id}`
    return axiosClient.put(url, data)
  }
}
export default bannerAPI
