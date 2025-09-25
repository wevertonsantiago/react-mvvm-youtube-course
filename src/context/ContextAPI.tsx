import { createContext } from 'react'
import { IContext } from './ContextModel'

export const ContextAPI = createContext<IContext>({} as IContext)
