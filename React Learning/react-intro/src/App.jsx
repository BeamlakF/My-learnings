import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [bgColor, setbgColor] = useState ('')

  const toggleColor = () => {
    setbgColor (prev => ( prev === 'white' ? '#9e2222ff' : 'white'));
  } 

  return (
    
      <div style={{ backgroundColor: bgColor, padding: '20px' }} >
        <h1> Hello, {name || 'Stranger'}</h1>
        <input type = "text"
        placeholder='Enter you name'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <button onClick={toggleColor}>
  Change Background
</button>
      </div>

      )
        
}

export default App
