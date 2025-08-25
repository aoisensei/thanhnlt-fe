import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://echo.free.beeceptor.com',
  timeout: 15000,
})

http.interceptors.request.use((config) => {
  // Attach token here if needed
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)


