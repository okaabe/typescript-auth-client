import React from "react"
import { Link } from "react-router-dom"

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
  const [name, setName] = React.useState<string>("")
  const [surname, setSurname] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  return (
    <StyledContainer>
      <StyledThumbnailContainer />
      <StyledFormOutsideContainer>
        <StyledFormContainer>
          <WelcomeMessage>Already have an account? <Link to="/signin">Sign In</Link></WelcomeMessage>
          <FormHeaderText>
            Create your personal Account
          </FormHeaderText>
          <InputCollection>
            <InputContainer>
              <span>Name</span>
              <Input type="text" onChange={(e) => setName(e.target.value)}/>
            </InputContainer>
            <InputContainer>
              <span>Surname</span>
              <Input type="text" onChange={(e) => setSurname(e.target.value)}/>
            </InputContainer>
            <InputContainer>
              <span>Email</span>
              <Input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </InputContainer>
            <InputContainer>
              <span>Password</span>
              <Input type="text" onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
          </InputCollection>
          <ButtonCollection>
            <SignUpButton>Sign Up</SignUpButton>
          </ButtonCollection>
        </StyledFormContainer>
      </StyledFormOutsideContainer>
    </StyledContainer>
  )
}

export default SignUpPage