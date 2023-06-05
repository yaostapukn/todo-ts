import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  complete,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span style={complete ? { color: '#ddd' } : { color: '#000' }}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>&#10006;</button>
    </div>
  )
}

export { TodoItem }
