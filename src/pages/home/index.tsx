import React from "react"

import { signin } from "../../api/session"

const Home = () => {
  React.useEffect(() => {
    signin("admin2@adminn.com", "admin").then((apiResponse) => {
      console.log(`Wrapper: ${JSON.stringify(apiResponse)}`)
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    <h1>Hello World</h1>
  )
}

export default Home
