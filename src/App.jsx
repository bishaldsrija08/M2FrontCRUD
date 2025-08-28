// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import ButtonComponent from "./ButtonComponent"
import router from "./Routes"
import { useState } from "react"
const App = () => {
const [count, setCount] = useState(0)
const incCount = ()=>{
  setCount(count+1)
}

const decCount =()=>{
  setCount(count-1)
}

const use = useState()
console.log(use[0], use[1])
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello</h1>} />
          <Route path="/about" element={<h1>About</h1>}/>
        </Routes>
      </BrowserRouter> */}
      <ButtonComponent />
      <ButtonComponent />
      <h1>{count}</h1>
      <button onClick={incCount}>Change +</button>
      <button onClick={decCount}>Change -</button>
    </>
  )
}

export default App