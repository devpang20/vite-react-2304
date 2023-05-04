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

  return (
    <div>
      <TodoInsert />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
