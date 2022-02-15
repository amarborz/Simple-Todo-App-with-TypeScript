import React, { useState } from "react";
import Todo from "../models/todo"

type TodoContextType = {
  items: Todo[],
  onAddTodo: (text: string) => void,
  onRemoveTodo: (id: string) => void
}

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  onAddTodo: () => {},
  onRemoveTodo: () => {}
})

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const removeTodoHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const contextValue: TodoContextType = {
    items: todos, 
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler
  }

  return (
    <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
  )
}

export default TodosContextProvider