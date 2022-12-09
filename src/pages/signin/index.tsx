import React from "react"

import { signin, signup } from "../../api/session"

const Home = () => {
  const [output, setOutput] = React.useState<string>("Empty")

  React.useEffect(() => {
    signin(
      "okaabe20026@hotmail.com.br",
      "admin",
    ).then((apiResponse) => {
      setOutput(`<h1>Wrapper output</h1>\n<p>${JSON.stringify(apiResponse)}</p>`)
    }).catch((err) => {
      setOutput(`<h1>Wrapper Error:</h1><p>${JSON.stringify(err)}</p>`)
    })
  }, [])

  return (
    <div>
      <h1>{output}</h1>
      <button>Run</button>
    </div>
  )
}

export default Home
