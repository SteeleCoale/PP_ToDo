
import { useState, useRef, useEffect } from 'react'
import GlobalStyle from './globalStyles'
import ToDoList from './ToDoList'

/**
 * Goal for today: have one list that updates on load from DB, and can add Todos to.
 * publish it using AWS amplify.
 
 * Next, make them todos drag and droppable using dndKit.com.
 * componentize ToDo list so the page can have multiple lists.
 */

function App() {

  return (
    <>
    <GlobalStyle />
    <ToDoList />
    </>
  )
}

export default App
