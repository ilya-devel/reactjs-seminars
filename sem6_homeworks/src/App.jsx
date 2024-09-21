import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import LstProducts from './components/LstProducts/LstProducts'

function App() {

  return (
    <>
      <Provider store={store}>
        <LstProducts />
      </Provider>
    </>
  )
}

export default App
