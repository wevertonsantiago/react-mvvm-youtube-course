import { ITaskApiPaginationResponse } from '../../services/model/getTaskModel'

export interface IUseApiDataModel {
  setIsLoadingApiStart: () => void
  setIsLoadingApiEnd: () => void
  isLoading: boolean
  dataTaskApi: ITaskApiPaginationResponse | undefined
  setDataTaskApi: React.Dispatch<
    React.SetStateAction<ITaskApiPaginationResponse | undefined>
  >
}
