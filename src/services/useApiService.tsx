import { IUseUnitSeriveProps } from '../hook/useInit/useInitModel'
import { IUseApiService } from './apiServiceModel'
import { useTaskApiService } from './tasks/useTaskApiService'
import { useUserApiService } from './user/useUserApiService'

export const useApiService = ({
  context,
}: IUseUnitSeriveProps): IUseApiService => {
  const userApi = useUserApiService({ context })
  const taskApi = useTaskApiService({ context })
  return {
    userApi,
    taskApi,
  }
}
