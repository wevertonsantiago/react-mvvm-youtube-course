import { IUseUnitSeriveProps } from '../../hook/useInit/useInitModel'
import { api, setToken } from '../configApiService'
import {
  ILoginResponse,
  IUserBody,
  IUseUserApiServiceModel,
} from './useUserApiServiceModel'

export const useUserApiService = ({
  context,
}: IUseUnitSeriveProps): IUseUserApiServiceModel => {
  const { apiData } = context

  const createUser = async ({ email, password }: IUserBody): Promise<void> => {
    try {
      apiData.setIsLoadingApiStart()
      await api.post('/api/Auth/register', {
        email,
        password,
      })

      apiData.setIsLoadingApiEnd()
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  const login = async ({ email, password }: IUserBody): Promise<void> => {
    try {
      apiData.setIsLoadingApiStart()
      const res = await api.post<ILoginResponse>('/api/Auth/login', {
        email,
        password,
      })
      const { token } = res.data
      setToken(token)
      apiData.setIsLoadingApiEnd()
    } catch (error) {
      apiData.setIsLoadingApiEnd()
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }
  return {
    createUser,
    login,
  }
}
