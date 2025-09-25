import { IUseApiService } from '../apiServiceModel'
import { ITaskApiPaginationResponse } from '../model/getTaskModel'

export interface ITaskApiServiceModel {
  getTask: ({
    pageCurrent,
    itemsPerPage,
    reverse,
    orderBy,
    search,
  }: IGetTaskQuery) => Promise<ITaskApiPaginationResponse>
  createTask: ({
    title,
    description,
  }: ITaskBody) => Promise<ICreateTaskResponse>
  editTask: ({
    title,
    description,
    TaskId,
  }: ITaskBody) => Promise<ICreateTaskResponse>
  deleteTask: ({ TaskId }: ITaskIdQuery) => Promise<void>
}

export interface IApiService {
  api: IUseApiService
}

export enum Reverse {
  crescente = 'crescente',
  decrescente = 'decrescente',
}

export enum OrderBy {
  dateCreate = 'dateCreate',
  dateUpgrade = 'dateUpgrade',
}

export interface ITaskApiResponse {
  id: string
  title: string
  description: string
  dateCreate: string
  dateUpgrade: string
}

export interface IGetTaskQuery {
  pageCurrent?: number
  itemsPerPage?: number
  reverse?: Reverse
  orderBy?: OrderBy
  search?: string
}

export interface IUserBody {
  email: string
  password: string
}

export interface ILoginResponse {
  token: string
  expiration: string
}

export interface ITaskBody {
  title: string
  description: string
  TaskId?: string
}

export interface ICreateTaskResponse {
  title: string
  description: string
  dateCreate: string
}

export interface IEditTaskResponse {
  id: string
  title: string
  description: string
  dateCreate: string
  dateUpgrade: string
}
export interface ITaskIdQuery {
  TaskId: string
}
