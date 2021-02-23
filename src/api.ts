import axios from 'axios'

export const get = async <ResponseType>(url: string) => {
  const response = await axios.get<ResponseType>(url)
  return response.data
}
