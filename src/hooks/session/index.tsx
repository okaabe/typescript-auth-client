import {
  ReactNode,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react"

import usePersistedState from "../../util/usePersistedState"

export type ReactSessionContextType = {
  token: string

  setToken: Dispatch<SetStateAction<string>>
}

export const ReactSessionContext = createContext<ReactSessionContextType>({} as ReactSessionContextType)

export const ReactSessionProvider = (props: {
  children: ReactNode
}) => {
  const [token, setToken] = usePersistedState<string>("AUTH", "")

  return (
    <ReactSessionContext.Provider value={{ token, setToken }}>
      {props.children}
    </ReactSessionContext.Provider>
  )
}

export const useSessionProvider = () => useContext(ReactSessionContext)
