import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutesUrl } from './routesUrl'
import { HomeView } from '../pages/home/HomeView'
import { Page2View } from '../pages/page2/Page2View'
import { useInitViewModel } from '../hook/useInit/useInitViewModel'

export const Navigation: React.FC = () => {
  const viewModel = useInitViewModel()
  return (
    <Routes>
      <Route path="/" element={<Navigate to={RoutesUrl.Home} />} />
      <Route
        path={RoutesUrl.Home}
        element={<HomeView vm={viewModel.home.vm} />}
      />
      <Route path={RoutesUrl.Page2} element={<Page2View />} />
    </Routes>
  )
}
