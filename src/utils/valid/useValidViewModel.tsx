import { IUseValidModel } from './useValidModel'

export const useValidViewModel = (): IUseValidModel => {
  const isCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) {
      return false
    }
    return true
  }
  return {
    isCPF,
  }
}
