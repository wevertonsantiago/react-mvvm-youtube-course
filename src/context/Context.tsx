import React from 'react'
import { IPropsContext } from './ContextModel'
import { ContextAPI } from './ContextAPI'
import { useUserViewModel } from './user/useUserViewModel'
import { useProdutoViewModel } from './produto/useProdutoViewModel'
import { useApiDataViewModel } from './apiData/useApiDataViewModel'

export const Context: React.FC<IPropsContext> = ({
  children,
}: React.PropsWithChildren<IPropsContext>) => {
  const user = useUserViewModel()
  const produto = useProdutoViewModel()
  const apiData = useApiDataViewModel()

  return (
    <ContextAPI.Provider
      value={{
        user,
        produto,
        apiData,
      }}
    >
      {children}
    </ContextAPI.Provider>
  )
}
