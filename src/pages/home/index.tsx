import axios, { isAxiosError } from "axios"
import React from "react"
import { handleAxiosError } from "../../api/err/axios"

import { signin, signup } from "../../api/session"

const Home = () => {
  const [output, setOutput] = React.useState<string>("Empty")

  const callback = React.useCallback(() => {
    
    signup({
      email: "admin.admin@hotmail.com",
      password: "test",

      name: "carlos",
      surname: "henrique",
    }).then((response) => {
      setOutput(JSON.stringify(response))
    }).catch((err) => {
      console.log(err)
        // setOutput(JSON.stringify(err))
    })
  }, [])

  return (
    <div>
      <h1>{output}</h1>
      <button onClick={callback}>Run</button>
    </div>
  )
}

export default Home
