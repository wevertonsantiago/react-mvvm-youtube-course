import { NavigateFunction } from 'react-router-dom'
import { IContext } from '../../context/ContextModel'
import { IUseHomeViewModel } from '../../pages/home/HomeModel'
import { IUseUtilsModel } from '../../utils/useUtilsModel'
import { IUseApiService } from '../../services/apiServiceModel'

export interface IUseInitProps {
  context: IContext
  navigate: NavigateFunction
  utils: IUseUtilsModel
  api: IUseApiService
}

export interface IUseUnitSeriveProps {
  context: IContext
}

export interface IUseInitViewModel {
  home: IUseHomeViewModel
}
