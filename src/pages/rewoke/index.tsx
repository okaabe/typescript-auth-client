import React from "react"

import { signin, rewoke } from "../../api/session"

const Home = () => {
  const [output, setOutput] = React.useState<string>("Empty")

  const callback = React.useCallback(() => {
    rewoke("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im9rYWFiZTIwMDI2QGhvdG1haWwuY29tLmJyIiwibmFtZSI6ImFkbWluQDIiLCJzdXJuYW1lIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTA5VDE3OjMyOjE2LjUwNFoiLCJpc3N1ZWRBdCI6MTY3MDYwNzEzNjUxMywiZXhwaXJlc0F0IjoxNjcwNjI1MTM2NTEzfQ.QN22By7RsVqVs0vZkIDCM225RhSCGkV18bpazxuBdu8").then((apiResponse) => {
      setOutput(`<h1>Wrapper output</h1>\n<p>${JSON.stringify(apiResponse)}</p>`)
      console.log(apiResponse)
    }).catch((err) => {
      setOutput(`<h1>Wrapper Error:</h1><p>${JSON.stringify(err)}</p>`)
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
