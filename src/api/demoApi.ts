import { http } from './http.ts'

type HelloResponse = {
  message: string
}

export const demoApi = {
  async getHello(): Promise<HelloResponse> {
    const { data } = await http.get<HelloResponse>('/hello')
    return data
  },
}


