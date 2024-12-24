let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:4000'
}
if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://langsch5sao.edu.vn/backend'
}
export const API_ROOT = apiRoot
