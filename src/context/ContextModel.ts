import { IUseApiDataModel } from './apiData/useApiDataModel'
import { IUseProdutoModel } from './produto/useProdutoModel'
import { IUseUserModel } from './user/useUserModel'

export interface IPropsContext {
  children: React.ReactElement
}

export interface IContext {
  user: IUseUserModel
  produto: IUseProdutoModel
  apiData: IUseApiDataModel
}
