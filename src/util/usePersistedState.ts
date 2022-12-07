import { useState, Dispatch, SetStateAction, useEffect } from "react"

export type PersistedStateResponse <V> = [
  V,
  Dispatch<SetStateAction<V>>
]

const usePersistedState = <V> (key: string, defaultValue: V): PersistedStateResponse<V> => {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key)

    if (stored) {
      return JSON.parse(stored)
    } else {
      return JSON.stringify(defaultValue)
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, setState, key])

  return [state, setState]
}

export default usePersistedState