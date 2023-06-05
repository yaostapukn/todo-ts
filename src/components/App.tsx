import { useState, useEffect, useRef } from 'react'
import { ITodo } from '../types/data'
import { TodoList } from './TodoList'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (value.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ])
    }
    setValue('')
  }

  const inputRef = useRef<HTMLInputElement>(null)

  //фокус на инпут при монтировании
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') handleAddTodo()
  }

  const handleRemoveTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleToggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          complete: !todo.complete,
        }
      })
    )
  }
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <TodoList
        items={todos}
        removeTodo={handleRemoveTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  )
}

export { App }
