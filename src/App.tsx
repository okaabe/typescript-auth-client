import React from "react"

import { RouterProvider } from "react-router-dom"
import ToastContainer from "./components/toast"
import { SessionContextProvider } from "./hooks/session"

import GlobalStyled from "./styles/global"

import router from "./routes/router"

const App = () => {
  return (
    <>
      <SessionContextProvider>
        <RouterProvider router={router}/>
      </SessionContextProvider>
      <ToastContainer 
        hideProgressBar={true}
      />
      <GlobalStyled />
    </>
  )
}

export default App
