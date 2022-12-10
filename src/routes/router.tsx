import { createBrowserRouter } from "react-router-dom"

import AuthRoute from "./authRoute"

import HomePage from "../pages/home"
import SignUpPage from "../pages/signup"
import SignInPage from "../pages/signin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello world</h1>
  },
])

export default router
