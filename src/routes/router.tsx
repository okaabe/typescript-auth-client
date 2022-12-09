import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/home"
import SignInPage from "../pages/signin"
import RewokePage from "../pages/rewoke"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/rewoke",
    element: <RewokePage />
  }
])

export default router
