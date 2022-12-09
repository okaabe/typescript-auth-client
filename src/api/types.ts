export type Session = {
  email: string
  surname: string
  name: string

  createdAt: Date

  issuedAt: number
  expiresAt: number
}

export type APISessionSignUpData = Omit<Session, "expiresAt" | "issuedAt" | "createdAt"> & {
  password: string
}


export type APISessionResponse <T> = 
  | { type: "authenticated", data: T }
  | { type: "rewoked", data: T, token?: string }
  | { type: "created", data: T }
  | { type: "refused" }
  | { type: "wrong-credentials" }
  | { type: "conflict" }
  | { type: "unauthorized" }
  | { type: "internal-server-error" }
  | { type: "bad-request" }
  | { type: "network-error" }
  | { type: "unhandled", err: unknown }

export type EncodeResult = {
  expiresAt: number
  issuedAt: number
  token: string
}
