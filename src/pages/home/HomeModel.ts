import { IContext } from '../../context/ContextModel'
import { IUseUtilsModel } from '../../utils/useUtilsModel'

export interface IUseHomeViewModel {
  vm: {
    teste: () => void
    teste2: () => void
    test: string
    context: IContext
    utils: IUseUtilsModel
  }
}
