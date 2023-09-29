
import { useState, useRef, useEffect } from 'react'
import { getTodos } from './db'
import { createGlobalStyle } from 'styled-components'
import { Checkbox } from '@acuity-brands/uiux.facade.checkbox'

/**
 * Goal for today: have one list that updates on load from DB, and can add Todos to.
 * publish it using AWS amplify.
 
 * Next, make them todos drag and droppable using dndKit.com.
 * componentize ToDo list so the page can have multiple lists.
 */

const GlobalStyle = createGlobalStyle`
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
line-height: 1.5;
font-weight: 400;

color-scheme: light dark;
color: rgba(255, 255, 255, 0.87);
background-color: rgb(216, 235, 235);

font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
`

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
    <GlobalStyle />
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
