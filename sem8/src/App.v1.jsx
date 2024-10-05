import { useState } from 'react'
import './App.css'

function App() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random'
  const [joke, setJoke] = useState('Joke is not found')
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    try {
      if (loading) {
        return
      }
      setLoading(true)
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error({ message: "Address not found" })
      }
      const data = await response.json()
      // const data = await fetch(apiUrl).then(res => res.json())
      console.log(data)
      setJoke(data.value)
    } catch (error) {
      setJoke("Failed to fetch")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1>Jokes about Chuck Norris</h1>
      <button onClick={fetchJoke} disabled={loading}>{loading ? "Loading ..." : "Get new joke"}</button>
      <p>{joke}</p>
    </>
  )
}

export default App
