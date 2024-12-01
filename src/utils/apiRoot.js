let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:4000'
}
if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://back-end-5zws.onrender.com'
}
export const API_ROOT = apiRoot
