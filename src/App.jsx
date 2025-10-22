import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import SinglePage from "./pages/SinglePage"
import Edit from "./pages/Edit"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/single/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
