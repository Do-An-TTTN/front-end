import axiosClient from '~/api/axiosClient'

const cateAPI = {
  getAllCate: () => {
    const url = '/api/category'
    return axiosClient.get(url)
  },
  getCourseCate: (cateId) => {
    const url = `/api/category/${cateId}`
    return axiosClient.get(url)
  }
}
export default cateAPI
