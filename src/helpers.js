import { getTodos, addOrUpdateToDo, deleteToDo } from './db'

export const getAllTodos = async (setTodos) => {
  try {
    const data = await getTodos()
    const persistedTodos = data.Items
    setTodos(persistedTodos)
  } catch (error) {
    console.log('error in retrieving all todos', error)
  }
}

export const addNewTodo = async (newTodo) => {
  try {
    const response = await addOrUpdateToDo(newTodo)
  } catch(error) {
    console.log('error in adding new todo', error)
  }
}

export const removeTodo = async (id) => {
  try {
    await deleteToDo(id)
  } catch (error) {
    console.log('error in deleting todo with id', id, error)
  }
}