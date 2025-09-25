import { useContext } from 'react'
import { useHomeViewModel } from '../../pages/home/HomeViewModel'
import { IUseInitViewModel } from './useInitModel'
import { useNavigate } from 'react-router-dom'
import { useUtilsViewModel } from '../../utils/useUtilsViewModel'
import { ContextAPI } from '../../context/ContextAPI'
import { useApiService } from '../../services/useApiService'

export const useInitViewModel = (): IUseInitViewModel => {
  const context = useContext(ContextAPI)
  const navigate = useNavigate()
  const utils = useUtilsViewModel()
  const api = useApiService({ context })
  return {
    home: useHomeViewModel({ context, navigate, utils, api }),
  }
}
