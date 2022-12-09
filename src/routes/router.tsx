import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/home"
import SignInPage from "../pages/signin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  }
])

export default router
