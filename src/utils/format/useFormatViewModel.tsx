import { IUseFormatModel } from './useFormatModel'

export const useFormatViewModel = (): IUseFormatModel => {
  const moedaRealString = (valor: string): string => {
    const valorComPonto = valor.replace(',', '.')
    const valorNumerico = parseFloat(valorComPonto.replace(/[^\d.-]/g, ''))
    return valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  const moedaRealNumber = (valor: number): string => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return {
    moedaRealString,
    moedaRealNumber,
  }
}
