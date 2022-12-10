import React, { useEffect } from "react"

export type TokenStateResponse = [
    string,
    React.Dispatch<React.SetStateAction<string>>
]

export const useToken = (key: string, defaultValue: string): TokenStateResponse => {
    const [token, setToken] = React.useState<string>(() => {
        const storedValue = localStorage.getItem(key)

        return storedValue && storedValue?.trim() !== "" ? storedValue : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, token)
    }, [token, key])

    return [token, setToken]
}