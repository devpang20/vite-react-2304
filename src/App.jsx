import { useState } from "react"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '복습하기',
      checked: true,
    },
    {
      id: 3,
      text: '운동하기',
      checked: false,
    }
  ])

  const onToggle = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo  
      )
    )
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <TodoInsert />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default App
