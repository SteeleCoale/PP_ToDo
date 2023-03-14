import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const inputRef = useRef()
  //things I learned

  /** 
   * arrays are also referencing that to which they are set equal.
   * so it has to be newNotes = [...notes], not newNotes = notes (this is referring to the same spot in memory)
   array.splice is modifing the array. So you have to let it do that before setting the modified array into state.
  */
  
  const onAddClickHandler = () => {
    let newNote = inputRef.current.value
    let newNotes = [...notes]
    newNotes.push(newNote)
    setNotes(newNotes)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const removeClickHandler = index => {
    console.log('remove at index', index)
    let newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
    inputRef.current.focus()
  }

  return (
    <>
      <div className='inputContainer'>
        <input placeHolder='add note here' ref={inputRef}></input>
        <button onClick={onAddClickHandler}>Add Note</button>
      </div>
      <div className='noteContainer'>
        {notes.map((note, index) => {
          return (
            <div className='note' key={index}>
            <p>{note}</p>
            <button onClick={() => removeClickHandler(index)}>Remove note</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
