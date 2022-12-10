import React from "react"

import { rewoke } from "../../api/session"
import { useToken } from "./token"

export type SessionContextType = {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export const SessionContext = React.createContext<SessionContextType>({} as SessionContextType)

export const SessionContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useToken("SESSION_JWT", "")

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      { children }
    </SessionContext.Provider>
  )
}

export const isAuthenticated = (ctx: SessionContextType) => ctx.token.trim() !== ""

export const useSession = () => React.useContext(SessionContext)