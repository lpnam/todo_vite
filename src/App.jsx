import { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="border border-white rounded-md p-10 ml-10">
      <Todo />
    </div>
  )
}

export default App
