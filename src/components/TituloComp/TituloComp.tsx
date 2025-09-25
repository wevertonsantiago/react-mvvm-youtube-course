import { ITituloCompModel } from './TituloCompModel'

export const TituloComp: React.FC<ITituloCompModel> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
