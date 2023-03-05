import { YMaps } from '@pbe/react-yandex-maps'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <YMaps>
        <Home />
      </YMaps>
    </Provider>
  )
}

export default App
