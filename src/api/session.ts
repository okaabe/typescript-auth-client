import axios from "axios"
import { Session } from "inspector"
import { handleAxiosError } from "./err/axios"

import { API_BASE_URL } from "./properties"

import {
  APISessionResponse,
  APISessionSignUpData,
  EncodeResult,
} from "./types"

export const mount = (extension: string): string => `${API_BASE_URL}/session/${extension}`

export const signup = async (userData: APISessionSignUpData): Promise<APISessionResponse<EncodeResult>> => {
  try {
    
  } catch (err) {

  }
  return { type: "unhandled", err: null }  
}

export const signin = async (email: string, password: string): Promise<APISessionResponse<EncodeResult>> => {
  try {
    const response = (await axios.post(mount("signin"), { email, password })).data

    if (response.ok && response.data.type === "ok") {
      return { type: "authenticated", data: response.data.data }
    }

    return { type: "unhandled", err: null }
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return handleAxiosError(err)
    }

    throw err
  }
}