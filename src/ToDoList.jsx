
import { useState, useRef, useEffect } from 'react'
import { getAllTodos, addNewTodo, removeTodo } from './helpers'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';



const ToDoListWrapper = styled.div`
  margin-top: 100px;
`
const StyledHeading = styled.h1`
  font-weight: 200;
  color: #E75480;
`
const StyledUl = styled.ul`
  list-style-type: none;
  height: 400px;
  overflow: scroll;
  padding: 0;
`
const StyledLi = styled.li`
  border: 1px solid purple;
  margin: 4px 0 0 4px;
  width: 400px;
  position: relative;
`
const StyledDeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`
const NewTodoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 14px;
  &::placeholder {
    color: orange;
  }
`

const ToDoList = ({ listNumber, ...omittedProps}) => {
  const [toDos, setTodos] = useState([])

  // Load persisted data from DynamoDb on component load
  // When this component gets reused this will need to ask for todos related to this todoList. Hence the above prop.
    useEffect(() => {
      getAllTodos(setTodos)
    }, [])

  const todoValueInputRef = useRef()

  const addButtonClickHandler = () => {
    const newTodoData = todoValueInputRef.current.value
    if (newTodoData === '' || newTodoData === undefined){
      return
    } else {
      const date = new Date()
      const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      const newTodo = {
        id: uuidv4(),
        dateCreated: dateString,
        data: newTodoData
      }
      addNewTodo(newTodo)
      setTimeout(() => getAllTodos(setTodos), 20)
    }
    todoValueInputRef.current.value = ''
    todoValueInputRef.current.focus()
  }

  const deleteClickHandler = (index, id) => {
    removeTodo(id)
    setTimeout(() => getAllTodos(setTodos), 20)
  }

  // Add button key listener
  useEffect(() => {
    const keyListener = e => {
      if (document.activeElement === todoValueInputRef.current && e.keyCode === 13){
        addButtonClickHandler()
      }
    }
    document.addEventListener('keydown', keyListener)

    return () => {
      document.removeEventListener('keydown', keyListener)
    }
  }, [])

  return (
    <ToDoListWrapper {...omittedProps}>
    <StyledHeading>Logan's Todos</StyledHeading>
    <StyledUl>
      {toDos.map((toDo, index) => {
        return (
        <StyledLi key={index}>
          <p>{toDo.dateCreated}</p>
          <p>{toDo.data}</p>
          <StyledDeleteButton onClick={() => deleteClickHandler(index, toDo.id)}>Delete this todo</StyledDeleteButton>
          </StyledLi>
        )
      })}
    </StyledUl>
    <NewTodoInputWrapper>
    <p>Add a new thing:</p>
    <StyledInput placeholder='What needs to be done' ref={todoValueInputRef}></StyledInput><button onClick={addButtonClickHandler}>Add this thing</button>
    </NewTodoInputWrapper>
    </ToDoListWrapper>
  )
}

export default ToDoList
