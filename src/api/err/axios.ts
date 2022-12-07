import { AxiosError } from "axios";
import { APISessionResponse } from "../types";

export const handleAxiosError = (err: AxiosError<any, any>): APISessionResponse<any> => {
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
    case 409:
      return { type: "conflict" }
    case 500:
      return { type: "internal-server-error" }
    default:
      return { type: "unhandled", err }
  }
}
