import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewToDo from './components/NewToDo/NewToDo'
import ListToDo from './components/ListToDo/ListToDo'
import NewProduct from './components/NewProduct/NewProduct'
import ListProduct from './components/ListProducts/ListProducts'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<h1>Seminar 5</h1>} />
            <Route path='/todos' element={<>
              <NewToDo />
              <ListToDo />
            </>} />
            <Route path='/products' element={<>
              <h1>Products</h1>
              <NewProduct />
              <ListProduct />
            </>} />
          </Routes>
        </BrowserRouter>

      </Provider>
    </>
  )
}

export default App
