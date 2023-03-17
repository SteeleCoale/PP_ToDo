import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

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

  return (
    <>
    <p>Note taker</p>
    <div>
    <input ref={inputRef}></input>
    <button onClick={addButtonClickHandler}>Add note</button>
    </div>
    <ul>
      {notes.map((note, index) => {
        return (
         <div className='note'>
        <li key={index}>{note}</li>
        <button onClick={() => deleteClickHandler(index)}>click me</button>
         </div> 
        )
      })}
    </ul>
    </>
  )
}

export default App
