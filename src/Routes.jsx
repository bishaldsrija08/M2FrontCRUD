import {createBrowserRouter} from "react-router-dom"
const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello This is Home page</h1>
    },
    {
        path: "/about",
        element: <h1>Hello this is about page.</h1>
    }
])

export default router