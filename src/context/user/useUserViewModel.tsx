import { useState } from 'react'
import { IUseUserModel } from './useUserModel'

export const useUserViewModel = (): IUseUserModel => {
  const [name, setName] = useState('')
  const [cell, setCell] = useState(0)
  return {
    name,
    setName,
    cell,
    setCell,
  }
}
