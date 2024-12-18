import axiosClient from '~/api/axiosClient'

const newsAPI = {
  getAllNews: () => {
    const url = '/api/news'
    return axiosClient.get(url)
  },
  createNews: (data) => {
    const url = '/api/news'
    return axiosClient.post(url, data)
  },
  getNews: (id) => {
    const url = `/api/news/${id}`
    return axiosClient.get(url)
  },
  updateNews: (id, data) => {
    const url = `/api/news/${id}`
    return axiosClient.put(url, data)
  },
  deleteNews: (id) => {
    const url = `/api/news/${id}`
    return axiosClient.delete(url)
  }
}
export default newsAPI
