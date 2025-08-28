import { BrowserRouter, Routes, Route } from "react-router-dom"
import ButtonComponent from "./ButtonComponent"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello</h1>} />
          <Route path="/about" element={<h1>About</h1>}/>
        </Routes>
      </BrowserRouter>
      <ButtonComponent />
      <ButtonComponent />
    </>
  )
}

export default App