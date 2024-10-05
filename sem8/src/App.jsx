import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchJoke } from './store/reduces/jokeSlice'
import { fetchConvertation, setAmount, setCurrency } from './store/reduces/convertationSlice'

function App() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random'

  const { joke, loading, error } = useSelector(state => state.jokes)
  const { currencies, result, amount } = useSelector(state => state.currencies)

  const [amountValue, setAmountValue] = useState(0)
  const [currencyValue, setCurrencyValue] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJoke(apiUrl))
    dispatch(fetchConvertation())
  }, [dispatch])

  const convertOperation = () => {
    dispatch(setAmount(amountValue))
    dispatch(setCurrency(currencyValue))
    dispatch(fetchConvertation())
  }

  return (
    <>

      <h1>Jokes about Chuck Norris</h1>
      <button onClick={() => dispatch(fetchJoke(apiUrl))} disabled={loading}>{loading ? "Loading ..." : "Get new joke"}</button>
      <p>{joke}</p>
      <p>{error == null ? "" : error}</p>

      <h2>Converter: </h2>
      <label htmlFor="amount">Amount: </label>
      <input type="number" name="amount" id="amount" value={amountValue} onChange={e => setAmountValue(e.target.value)} />
      <br />
      <label htmlFor="toCurrency">To currency</label>
      <select name="toCurrency" id="toCurrency" defaultValue={currencies[0]} onChange={e => {
        setCurrencyValue(e.target.value)
      }}>
        {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
      </select>
      <br />
      <button onClick={() => convertOperation()}>Convert</button>
      <p>Result: {result}</p>
    </>
  )
}

export default App
