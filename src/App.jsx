
import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { loadAllTodos } from '../helpers'
import { getTodos } from './db'
import { Checkbox } from '@acuity-brands/uiux.facade.checkbox'

function App() {
  const [notes, setNotes] = useState([])
  const [toDos, setTodos] = useState([])

  const inputRef = useRef()

  const addButtonClickHandler = () => {
    const newNotes = [...notes]
    const newNote = inputRef.current.value
    if (newNote === '' || newNote === undefined){
      return
    } else {
      newNotes.push(inputRef.current.value)
    }
    setNotes(newNotes)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const deleteClickHandler = (index) => {
    const newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
  }

  useEffect(() => {
    const keyListener = e => {
      if (document.activeElement === inputRef.current && e.keyCode === 13){
        addButtonClickHandler()
      }
    }
    document.addEventListener('keydown', keyListener)

    return () => {
      document.removeEventListener('keydown', keyListener)
    }
  }, [])

  const handleLoadTodosClick = () => {
    console.log("laod todos clicked")
    getTodos()
  }

  return (
    <>
    <p>Todos</p>
    <div>
    <button onClick={handleLoadTodosClick}>Load todos Button</button>
    </div>
    <ul>
      {toDos.map((note, index) => {
        return (
         <div className='note'>
        <li key={index}>{note.data}</li>
         </div> 
        )
      })}
    </ul>
    </>
  )
}

export default App
