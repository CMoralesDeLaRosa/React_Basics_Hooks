import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character/Character'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
  }, [])

  return (
    <div className='characters'>
      {characters.map((character) => (
        <Character character={character} />
      ))}
    </div>
  )
}

export default App
