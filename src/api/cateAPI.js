import axiosClient from '~/api/axiosClient'

const cateAPI = {
  createCate: (data) => {
    const url = '/api/category'
    return axiosClient.post(url, data)
  },
  getAllCate: () => {
    const url = '/api/category'
    return axiosClient.get(url)
  },
  getCourseCate: (cateId) => {
    const url = `/api/category/${cateId}`
    return axiosClient.get(url)
  },
  updateCate: (cateId, data) => {
    const url = `/api/category/${cateId}`
    return axiosClient.put(url, data)
  },
  deleteCate: (cateId) => {
    const url = `/api/category/${cateId}`
    return axiosClient.delete(url)
  }
}
export default cateAPI
