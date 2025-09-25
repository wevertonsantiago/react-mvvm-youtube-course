export interface IUseProdutoModel {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  codigo: number
  setCodigo: React.Dispatch<React.SetStateAction<number>>
}
