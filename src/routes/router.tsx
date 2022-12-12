import { createBrowserRouter } from "react-router-dom"

import SignInPage from "../pages/signin"
import SignUpPage from "../pages/signup"

import AuthRoute from "./authRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <h1>Home</h1>
      </AuthRoute>
    )
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  }
])

export default router
