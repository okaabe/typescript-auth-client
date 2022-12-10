import React, { useEffect } from "react"

export type TokenStateResponse = [
    string,
    React.Dispatch<React.SetStateAction<string>>
]

export const useToken = (key: string, defaultValue: string): TokenStateResponse => {
    const [token, setToken] = React.useState<string>(() => {
        const storedValue = localStorage.getItem(key)

        if (storedValue && storedValue.trim() !== "") {
            return storedValue
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, token)
    }, [token, key])

    return [token, setToken]
}