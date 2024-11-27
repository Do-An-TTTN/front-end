import axiosClient from '~/api/axiosClient'

const courseAPI = {
  createCourse: (data) => {
    const url = '/course'
    return axiosClient.post(url, data)
  },
  getAllCourse: () => {
    const url = '/course'
    return axiosClient.get(url)
  },
  updateCourse: (_id, data) => {
    const url = `/course/${_id}`
    return axiosClient.put(url, data)
  },
  deleteCourse: (_id) => {
    const url = `/course/${_id}`
    return axiosClient.delete(url)
  }
}
export default courseAPI
