import React from "react"

import { RouterProvider } from "react-router-dom"
import { SessionContextProvider } from "./hooks/session"

import router from "./routes/router"

const App = () => {
  return (
    <>
      <SessionContextProvider>
        <RouterProvider router={router}/>
      </SessionContextProvider>
    </>
  )
}

export default App
