import { useContext, useRef } from "react"
import { TodoContext } from "../store/todos-context"

import classes from './NewTodo.module.css'


const NewTodo: React.FC = () => {
  const {onAddTodo} = useContext(TodoContext)
  const todoInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredInput = todoInputRef.current!.value

    if (enteredInput.trim().length === 0) {
      return
    }

    onAddTodo(enteredInput)

  }

  return (
    <form onSubmit={submitHandler} className={classes.form} >
      <label htmlFor="text" >Todo</label>
      <input type='text' id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo