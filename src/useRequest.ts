import useSWR, { ConfigInterface } from 'swr'

import { get } from './api'

const useRequest = <Response, Error = unknown>(url: string, options: ConfigInterface = {}) => {
  const fetcher = async (url: string) => get<Response>(url)
  const response = useSWR<Response, Error>(url, fetcher, options)

  return response
}

export default useRequest
