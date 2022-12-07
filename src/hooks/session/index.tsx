import { ReactNode, createContext, useContext, useState, useEffect } from "react"
import { ReactSessionContextType } from "./types"

import usePersistedState from "../../util/usePersistedState"

export const ReactSessionContext = createContext<ReactSessionContextType>({} as ReactSessionContextType)

export const ReactSessionProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = usePersistedState("session-jwt", "")
  const [email, setEmail] = useState<string | undefined>()

  useEffect(() => {

  }, [token])

  return (
    <ReactSessionContext.Provider value={{
      token, email,
    }}>
      { children }
    </ReactSessionContext.Provider>
  )
}

export const useSession = () => {
  return useContext(ReactSessionContext)
}

export default ReactSessionProvider
