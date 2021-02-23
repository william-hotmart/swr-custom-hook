import React from 'react'

import useRequest from './useRequest'

interface Data {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Bootstrap = () => {
  const { data } = useRequest<Data>('https://jsonplaceholder.typicode.com/todos/1')

  return <div>{data?.title}</div>
}

export default Bootstrap
