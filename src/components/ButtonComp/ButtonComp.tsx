import { IButtonCompModel } from './ButtomCompModel'

export const ButtonComp: React.FC<IButtonCompModel> = ({
  textButton,
  background = '#CCC',
  children,
}) => {
  return (
    <div>
      <button style={{ background: background }}>{textButton}</button>
      {children}
      <p>Esse é a parte 3 desse componente</p>
    </div>
  )
}
