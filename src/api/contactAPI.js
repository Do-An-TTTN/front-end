import axiosClient from '~/api/axiosClient'

const contactAPI = {
  createContact: (data) => {
    const url = '/contact'
    return axiosClient.post(url, data)
  },
  getAllContact: () => {
    const url = '/contact'
    return axiosClient.get(url)
  },
  deleteContact: (_id) => {
    const url = `/contact/${_id}`
    return axiosClient.delete(url)
  }
}
export default contactAPI
