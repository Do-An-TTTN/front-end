import axiosClient from '~/api/axiosClient'

const newsAPI = {
  getAllNews: () => {
    const url = '/news'
    return axiosClient.get(url)
  },
  createNews: (data) => {
    const url = '/news'
    return axiosClient.post(url, data)
  },
  getNews: (_id) => {
    const url = `/news/${_id}`
    return axiosClient.get(url)
  },
  updateNews: (_id, data) => {
    const url = `/news/${_id}`
    return axiosClient.put(url, data)
  }
}
export default newsAPI
