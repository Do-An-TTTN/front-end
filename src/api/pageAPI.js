import axiosClient from '~/api/axiosClient'

const pageAPI = {
  createPage: (data) => {
    const url = '/api/page'
    return axiosClient.post(url, data)
  },
  getAllPages: () => {
    const url = '/api/page'
    return axiosClient.get(url)
  },
  getPage: (id) => {
    const url = `/api/page/${id}`
    return axiosClient.get(url)
  },
  updatePage: (id, data) => {
    const url = `/api/page/${id}`
    return axiosClient.put(url, data)
  },
  deletePage: (id) => {
    const url = `/api/page/${id}`
    return axiosClient.delete(url)
  }
}
export default pageAPI
