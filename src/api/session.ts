import axios from "axios"
import { handleAxiosError } from "./err/axios"

import { API_BASE_URL, RENEWED_TOKEN_HEADER } from "./properties"

import {
  APISessionResponse,
  APISessionSignUpData,
  EncodeResult,
  Session
} from "./types"

export const mount = (extension: string): string => `${API_BASE_URL}/session/${extension}`

export const rewoke = async (authorization: string): Promise<APISessionResponse<Session>> => {
  try {
    const response = (await axios.get(mount("rewoke"), {
      headers: { authorization },
    }))
    
    if (response.data.ok) {
      return { type: "rewoked", data: response.data.data, token: response.headers[RENEWED_TOKEN_HEADER] }    
    }

    return { type: "unhandled", err: null }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return handleAxiosError(err)
    }

    throw err
  }
}

export const signup = async (userData: APISessionSignUpData): Promise<APISessionResponse<EncodeResult>> => {
  try {
    const responseBody = (await axios.post(mount("signup"), userData)).data

    if (responseBody.ok && responseBody.data.type === "ok") {
      console.log(responseBody.data.token)
      return { type: "created", data: responseBody.data.token }
    }

    return { type: "unhandled", err: responseBody }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return handleAxiosError(err)
    }

    throw err
  }
}

export const signin = async (email: string, password: string): Promise<APISessionResponse<EncodeResult>> => {
  try {
    const responseBody = (await axios.post(mount("signin"), { email, password })).data

    if (responseBody.ok && responseBody.data.type === "ok") {
      return { type: "authenticated", data: responseBody.data.data }
    }

    return { type: "unhandled", err: null }
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return handleAxiosError(err)
    }

    throw err
  }
}