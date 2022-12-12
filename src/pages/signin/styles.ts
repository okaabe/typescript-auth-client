import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`

export const StyledThumbnailContainer = styled.div`
  background-color: #051540;

  height: 100%;
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 933px) {
    display: none;
  }

  /* @media (max-width: 810px) {
    display: none;
  } */
`

export const StyledFormOutsideContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 933px) {
    width: 100%;
  }
`

export const StyledFormContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 3px;

  width: 50%;
  /* height: 65%; */
  height: auto;

  padding-left: 35px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 10%;  

  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);


  @media only screen and (max-width: 1366px) {
    width: 60%;
  }

  @media only screen and (max-width: 1234px) {
    width: 70%;
  }

  @media only screen and (max-width: 933px) {
    width: 50%;
  }
`

export const WelcomeMessage = styled.p`
  font-size: 14px;
  color: #C5C5C5;
`

export const FormHeaderText = styled.h1`
  font-size: 55px;
  color: "#051540";

  @media only screen and (max-width: 1542px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 1401px) {
    font-size: 43px;
  }

  @media only screen and (max-width: 1348px) {
    font-size: 40px;
  } 

  @media only screen and (max-width: 1043px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 933px) {
    font-size: 33px;
  }
`

export const InputCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 20px;
  
  width: 100%;
  height: auto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  margin-top: 10px;
  margin-bottom: 10px;

  span {
    color: #051540;
    padding-bottom: 3px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;

  border-radius: 3px;
  border: 1px solid;
  border-color: #c5c5c5;
  outline: none;

  padding-left: 10px;
  font-size: 20px;

  @media only screen and (max-width: 1564px) {
    height: 45px;
  }
`

export const ButtonCollection = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  margin-top: 10%;

  /* padding-left: 6px; */
  /* padding-right: 6px;   */
`

export const SignUpButton = styled.button`
  border: none;

  background-color: #2753FF;
  border-radius: 3px;
  color: #FFFFFF;

  display: block;
  text-align: center;

  width: 100%;
  height: 50px;


  cursor: pointer;

  transition: opacity .3s;

  &:hover {
    opacity: 0.9;
  }
`