import axiosClient from '~/api/axiosClient'

const courseAPI = {
  createCourse: (data) => {
    const url = '/api/course'
    return axiosClient.post(url, data)
  },
  getAllCourse: () => {
    const url = '/api/course'
    return axiosClient.get(url)
  },
  updateCourse: (id, data) => {
    const url = `/api/course/${id}`
    return axiosClient.put(url, data)
  },
  deleteCourse: (id) => {
    const url = `/api/course/${id}`
    return axiosClient.delete(url)
  }
}
export default courseAPI
