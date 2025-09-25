import { IUseUnitSeriveProps } from '../../hook/useInit/useInitModel'
import { api } from '../configApiService'
import { ITaskApiPaginationResponse } from '../model/getTaskModel'
import {
  ICreateTaskResponse,
  IGetTaskQuery,
  ITaskApiServiceModel,
  ITaskBody,
  ITaskIdQuery,
  OrderBy,
  Reverse,
} from './taskServiceModel'

export const useTaskApiService = ({
  context,
}: IUseUnitSeriveProps): ITaskApiServiceModel => {
  const { apiData } = context

  const getTask = async ({
    pageCurrent = 1,
    itemsPerPage = 5,
    reverse = Reverse.decrescente,
    orderBy = OrderBy.dateCreate,
    search = '',
  }: IGetTaskQuery): Promise<ITaskApiPaginationResponse> => {
    try {
      apiData.setIsLoadingApiStart()
      const searchQuery = search ? `&Search=${search}` : ''
      const res = await api.get<ITaskApiPaginationResponse>(
        `/api/Tasks?PageCurrent=${pageCurrent}&ItemsPerPage=${itemsPerPage}&Reverse=${reverse}&OrderBy=${orderBy}${searchQuery}`
      )
      apiData.setIsLoadingApiEnd()
      apiData.setDataTaskApi(res.data)
      return res.data
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  const createTask = async ({
    title,
    description,
  }: ITaskBody): Promise<ICreateTaskResponse> => {
    try {
      apiData.setIsLoadingApiStart()
      const res = await api.post<ICreateTaskResponse>('/api/Tasks', {
        title,
        description,
      })
      apiData.setIsLoadingApiEnd()
      return res.data
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  const editTask = async ({
    title,
    description,
    TaskId,
  }: ITaskBody): Promise<ICreateTaskResponse> => {
    try {
      apiData.setIsLoadingApiStart()
      const res = await api.put<ICreateTaskResponse>(
        `/api/Tasks?TaskId=${TaskId}`,
        {
          title,
          description,
        }
      )
      apiData.setIsLoadingApiEnd()
      return res.data
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  const deleteTask = async ({ TaskId }: ITaskIdQuery): Promise<void> => {
    try {
      apiData.setIsLoadingApiStart()
      await api.delete(`/api/Tasks?TaskId=${TaskId}`)

      apiData.setIsLoadingApiEnd()
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  return {
    getTask,
    createTask,
    editTask,
    deleteTask,
  }
}
