import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:1234',
})

let jwtToken: string | null = null

export const setToken = (token: string | null): void => {
  jwtToken = token

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.Authorization
  }
}

api.interceptors.request.use(
  (config) => {
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
