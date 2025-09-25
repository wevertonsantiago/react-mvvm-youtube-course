import { useState } from 'react'
import { IUseProdutoModel } from './useProdutoModel'

export const useProdutoViewModel = (): IUseProdutoModel => {
  const [name, setName] = useState('')
  const [codigo, setCodigo] = useState(0)
  return {
    name,
    setName,
    codigo,
    setCodigo,
  }
}
