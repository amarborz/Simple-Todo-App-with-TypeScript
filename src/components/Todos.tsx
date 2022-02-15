import { useContext } from 'react'
import { TodoContext } from '../store/todos-context'
import TodoItem from './TodoItem'

import classes from './Todos.module.css'

const Todos: React.FC = () => {
  const {items, onRemoveTodo} = useContext(TodoContext)

  return (
    <ul className={classes.todos}>
      {items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />)}
    </ul>
  )
}

export default Todos