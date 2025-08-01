import { useState } from 'react'

import './App.css'

function App() {
  // const [name, setName] = useState('')
  // const [bgColor, setbgColor] = useState ('')
  const [Todos, setTodos] = useState ([])
  const [bgColor, setbgColor] = useState('white');
  const [newTodo, setNewTodo] = useState('')
  

  // const toggleColor = () => {
  //   setbgColor (prev => ( prev === 'white' ? '#9e2222ff' : 'white'));
  // } 
  const addTodo = () => {
  if (newTodo.trim() === '') return; // don’t add empty tasks

  const newItem = {
    id: Date.now(),      // unique ID
    text: newTodo,       // task text
    done: false          // not completed yet
  };

  setTodos([...Todos, newItem]);  // add to the list
  setNewTodo('');                 // clear input
};

  return (
    
      <div style={{ backgroundColor: bgColor, padding: '20px' }} >
        
        <input type = "text"
        placeholder='Enter you task'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>
         Add</button>
      </div>

      )
        
}

export default App
