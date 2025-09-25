import { useState } from 'react'
import { IUseApiDataModel } from './useApiDataModel'
import { ITaskApiPaginationResponse } from '../../services/model/getTaskModel'

export const useApiDataViewModel = (): IUseApiDataModel => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataTaskApi, setDataTaskApi] = useState<ITaskApiPaginationResponse>()

  const setIsLoadingApiStart = () => {
    setIsLoading(true)
  }
  const setIsLoadingApiEnd = () => {
    setIsLoading(false)
  }

  return {
    setIsLoadingApiStart,
    setIsLoadingApiEnd,
    isLoading,
    dataTaskApi,
    setDataTaskApi,
  }
}
