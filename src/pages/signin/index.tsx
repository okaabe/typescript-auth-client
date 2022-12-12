import React from "react"

import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { signin } from "../../api/session"
import { useSession } from "../../hooks/session"

import {
  StyledContainer,
  StyledFormOutsideContainer,
  StyledThumbnailContainer,
  StyledFormContainer,
  WelcomeMessage,
  FormHeaderText,
  Input,
  InputCollection,
  InputContainer,
  ButtonCollection,
  SignUpButton,
} from "./styles"

const SignInPage = () => {
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const navigate = useNavigate()
  const session = useSession()

  const onSignIn = React.useCallback(() => {
    if (email.trim() === "" || password.trim() === "") {
      return toast.error("You gotta fill all the blank fields")
    }

    signin(email, password).then((response) => {
      switch (response.type) {
        case "authenticated":
          toast.success("Authenticated")
          session.setToken(response.data.token)
          return navigate("/")
        case "bad-request":
          return toast.error("You gotta fill all the blank fields")
        case "wrong-credentials":
          return toast.error("Wrong credentials")
        case "unauthorized":
          return toast.error("Refused! The server refused the request!")
        default:
          return toast.error("An error ocurred, try again later")
          
      }
    }).catch((err) => {})
  }, [email, navigate, password, session])

  return (
    <StyledContainer>
      <StyledThumbnailContainer />
      <StyledFormOutsideContainer>
        <StyledFormContainer>
          <WelcomeMessage>Don't you have an Account yet? <Link to="/signup">Sign Up</Link></WelcomeMessage>
          <FormHeaderText>
            Log into your Account
          </FormHeaderText>
          <InputCollection>
            <InputContainer>
              <span>Email</span>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </InputContainer>
            <InputContainer>
              <span>Password</span>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
          </InputCollection>
          <ButtonCollection>
            <SignUpButton onClick={ onSignIn }>Sign In</SignUpButton>
          </ButtonCollection>
        </StyledFormContainer>
      </StyledFormOutsideContainer>
    </StyledContainer>
  )
}

export default SignInPage