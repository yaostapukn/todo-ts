import { TodoItem } from './TodoItem'
import { ITodo } from '../types/data'
interface ITodoListProps {
  items: ITodo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = ({
  items,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </>
  )
}

export { TodoList }
