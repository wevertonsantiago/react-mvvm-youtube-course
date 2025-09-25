import { ITaskApiResponse } from '../apiServiceModel'

export interface ITaskApiPaginationResponse {
  pageTotal: number
  itemsTotal: number
  pageCurrent: number
  itemsPerPage: number
  hasNextPage: boolean
  list: ITaskApiResponse[]
}
