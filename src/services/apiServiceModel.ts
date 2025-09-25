import { ITaskApiServiceModel } from './tasks/taskServiceModel'
import { IUseUserApiServiceModel } from './user/useUserApiServiceModel'

export interface IUseApiService {
  userApi: IUseUserApiServiceModel
  taskApi: ITaskApiServiceModel
}
