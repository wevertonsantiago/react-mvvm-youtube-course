import { useFormatViewModel } from './format/useFormatViewModel'
import { IUseUtilsModel } from './useUtilsModel'
import { useValidViewModel } from './valid/useValidViewModel'

export const useUtilsViewModel = (): IUseUtilsModel => {
  const format = useFormatViewModel()
  const valid = useValidViewModel()
  return {
    format,
    valid,
  }
}
