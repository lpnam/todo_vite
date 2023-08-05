import { Main, Todo, CardETH } from '.'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="todos" element={<Todo />} />
          <Route path="card-eth" element={<CardETH />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
