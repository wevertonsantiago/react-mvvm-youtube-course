export interface IUseUserModel {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  cell: number
  setCell: React.Dispatch<React.SetStateAction<number>>
}
