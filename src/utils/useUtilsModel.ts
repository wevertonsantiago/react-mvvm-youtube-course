import { IUseFormatModel } from './format/useFormatModel'
import { IUseValidModel } from './valid/useValidModel'

export interface IUseUtilsModel {
  format: IUseFormatModel
  valid: IUseValidModel
}
