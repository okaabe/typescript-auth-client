import axios from "axios"

import { API_BASE_URL } from "./properties"

import {
  APISessionResponse,
  EncodeResult,
  Session
} from "./types"

export const mount = (extension: string): string => `${API_BASE_URL}/session/${extension}`

export const signin = async (email: string, password: string): Promise<APISessionResponse<EncodeResult>> => {
  try {
    const response = (await axios.post(mount("signin"), { email, password })).data

    if (response.ok && response.data.type === "ok") {
      return { type: "authenticated", data: response.data.data }
    }

    return { type: "unhandled", err: null }
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      if (!err.response || !err.response.status) {
        return { type: "network-error" } 
      }      

      switch (err.response.status) {
        case 400:
          return { type: "bad-request" }
        case 401:
          if (err.response.data && err.response.data.message === "wrong-credentials") {
            return { type: "wrong-credentials" }
          }

          return { type: "unauthorized" }
      }

      // console.log(`AxiosError: ${JSON.stringify(err.response)}`)
      return { type: "unhandled", err: null }
    }
    
    throw err
  }
}