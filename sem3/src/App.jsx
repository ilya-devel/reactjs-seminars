import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import MessageList from './components/MessageList'
import TextDisplayForm from './components/TextDisplayForm'

function App() {

  return (
    <>
      <Greetings name="Ilya" age={34} />
      <Counter />
      <MessageList />
      <TextDisplayForm />
    </>
  )
}

export default App
