import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import { Context } from './context/Context'

export const App: React.FC = () => {
  return (
    <Context>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Context>
  )
}
