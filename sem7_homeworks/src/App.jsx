import './App.css'
// import NewToDo from './components/NewToDo/NewToDo'
import ListToDo from './components/ListToDo/ListToDo'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        {/* <NewToDo /> */}
        <ListToDo />
      </Provider>

    </>
  )
}

export default App
