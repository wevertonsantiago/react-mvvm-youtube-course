import { ButtonComp } from '../../components/ButtonComp/ButtonComp'
import { TituloComp } from '../../components/TituloComp/TituloComp'
import { IUseHomeViewModel } from './HomeModel'

export const HomeView: React.FC<IUseHomeViewModel> = ({ vm }) => {
  const { test, context, utils } = vm
  const user = vm.context.user
  return (
    <div>
      <p>HomeView</p>
      <p>
        {test}
        {utils.format.moedaRealString('123')}
        {utils.format.moedaRealNumber(123)}
        {vm.utils.valid.isCPF('1234561')}
        {user.name}
        {user.cell}
        {context.produto.name}
      </p>

      <ButtonComp
        textButton="Contar Alguma coisa"
        children={<TituloComp text="Titulo" />}
        background="red"
      />
    </div>
  )
}
