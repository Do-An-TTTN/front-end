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
  getNews: (_id) => {
    const url = `/api/news/${_id}`
    return axiosClient.get(url)
  },
  updateNews: (_id, data) => {
    const url = `/api/news/${_id}`
    return axiosClient.put(url, data)
  }
}
export default newsAPI
