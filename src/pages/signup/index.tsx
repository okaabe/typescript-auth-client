import React from "react"

import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { signup } from "../../api/session"
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

const SignUpPage = () => {
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [name, setName] = React.useState<string>("")
  const [surname, setSurname] = React.useState<string>("")
  
  const navigate = useNavigate()
  const session = useSession()

  const onSignUp = React.useCallback(() => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      name.trim() === "" ||
      surname.trim() === ""
    ) {
      return toast.error("Please fill all the blank fields")
    }

    signup({ email, password, name, surname }).then((response) => {
      switch (response.type) {
        case "created":
          session.setToken(response.data.token)
          toast.success("Created and authenticated!")
          return navigate("/")
        case "bad-request":
          return toast.error("Please fill all the blank fields")
        case "conflict":
          return toast.error("Email taken, use another")
        default:
          return toast.error("An error occurred, try again later")
      }
    }).catch((err) => {
      console.error(err)
      toast.error("An error occurred, try again later")
    })
  }, [email, password, name, surname, session, navigate])

  return (
    <StyledContainer>
      <StyledThumbnailContainer />
      <StyledFormOutsideContainer>
        <StyledFormContainer>
          <WelcomeMessage>Do you already have an Account? <Link to="/signin">Sign In</Link></WelcomeMessage>
          <FormHeaderText>
            Create your own Account
          </FormHeaderText>
          <InputCollection>
            <div className="name-and-surname">
              <InputContainer>
                <span>Name</span>
                <Input type="text" className="name" onChange={(e) => setName(e.target.value)}/>
              </InputContainer>
              <InputContainer>
                <span>Surname</span>
                <Input type="text" className="surname" onChange={(e) => setSurname(e.target.value)}/>
              </InputContainer>
            </div>
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
            <SignUpButton onClick={ onSignUp }>Sign Up</SignUpButton>
          </ButtonCollection>
        </StyledFormContainer>
      </StyledFormOutsideContainer>
    </StyledContainer>
  )
}

export default SignUpPage