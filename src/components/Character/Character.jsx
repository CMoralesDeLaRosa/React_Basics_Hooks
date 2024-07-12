import { useState } from 'react'
import './Character.css'

const Character = ({ character }) => {
  const [turned, setTurned] = useState(false)

  return (
    <div
      className={`character ${turned ? 'turned' : 'image'}`}
      onClick={() => setTurned(!turned)}
    >
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  )
}

export default Character
