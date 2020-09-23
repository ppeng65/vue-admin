import axios from 'axios'

export default ({ baseURL, timeout = 5000, headers = {} }) => {
  const instance = axios.create({
    baseURL,
    timeout,
    headers
  })

  // request interceptor
  instance.interceptors.request.use(config => {
    config.headers = {
      ...config.headers,
      token: ''
    }
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

  // response interceptor
  instance.interceptors.response.use(response => {
    const data = response.data

    return Promise.resolve(data)
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })


  return instance
}
