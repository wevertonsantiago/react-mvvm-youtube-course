import { useState } from 'react'
import { IUseHomeViewModel } from './HomeModel'
import { IUseInitProps } from '../../hook/useInit/useInitModel'

export const useHomeViewModel = ({
  context,
  utils,
}: IUseInitProps): IUseHomeViewModel => {
  const [test, setTest] = useState('')

  const teste = () => {
    setTest('TESTE')
  }

  const teste2 = () => {
    setTest('TESTE2')
  }

  return {
    vm: {
      teste,
      teste2,
      test,
      context,
      utils,
    },
  }
}
