import axiosClient from '~/api/axiosClient'

const contactAPI = {
  createContact: (data) => {
    const url = '/api/contact'
    return axiosClient.post(url, data)
  },
  getAllContact: () => {
    const url = '/api/contact'
    return axiosClient.get(url)
  },
  deleteContact: (_id) => {
    const url = `/api/contact/${_id}`
    return axiosClient.delete(url)
  }
}
export default contactAPI
