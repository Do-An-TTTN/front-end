import axiosClient from '~/api/axiosClient'

const cateAPI = {
  getAllCate: () => {
    const url = '/category'
    return axiosClient.get(url)
  },
  getCourseCate: (cateId) => {
    const url = `/category/${cateId}`
    return axiosClient.get(url)
  }
}
export default cateAPI
