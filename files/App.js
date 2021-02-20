import React, { useReducer } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import toDoReducer, { addPosition, getInputText, deletePosition, complitePosition, cleanRT } from './redux/toDoReducer'
import s from './App.module.css'

const App = () => {

  let initialState = {
    inputValue: '',
    toDoData: []
  }

  let [state, dispatch] = useReducer(toDoReducer, initialState)

  let inputChange = (event) => {  
    let text = event.currentTarget.value
    dispatch(getInputText(text))
  }

  let pushTask = () => {
    dispatch(addPosition())
  }

  let deleteTask = (event) => {
    let text = event.currentTarget.parentNode.firstChild.data
    dispatch(deletePosition(text))
    
  }

  let compliteTask = (event) => {
    let text = event.currentTarget.parentNode.firstChild.data
    dispatch(complitePosition(text))
  }

  let cleanReadyTask = () => {
    dispatch(cleanRT())
  }

  return (
    <div className={s.container}>
      <TodoForm state={state}
        pushTask={pushTask}
        cleanReadyTask={cleanReadyTask}
        inputChange={inputChange} />
      <TodoList state={state}
        delete={deleteTask}
        complite={compliteTask} />
    </div>
  )
}
export default App;
