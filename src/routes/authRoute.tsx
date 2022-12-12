import React from "react"

import { Navigate } from "react-router-dom"
import { isAuthenticated, useSession } from "../hooks/session"

const AuthRoute = (props: { children: React.ReactNode }) => {
  const session = useSession()

  if (isAuthenticated(session)) {
    return <>{ props.children }</>
  }

  return <Navigate to="/signup"/>
}

export default AuthRoute
