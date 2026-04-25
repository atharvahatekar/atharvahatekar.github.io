import styled, { keyframes } from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  width: 70%;
  text-align: center;
  margin: auto;
  color: ${(props) => props.theme.fontColorSecondary};
  margin-top: 2em;

  @media (max-width: 767px) {
    margin-top: 3em;
    width: 85%;
  }

  @media (max-width: 430px) {
    margin-top: 7em;
  }

  @media (max-width: 390px) {
    margin-top: 13em;
  }
`;

export const H1 = styled.h1`
  font-size: 57px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
  animation-name: fadeInUp;
  animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media (max-width: 767px) {
    font-size: 49px;
  }
  @media (max-width: 450px) {
    font-size: 45px;
  }
`;

export const TypeWriterH1 = styled.h1`
  height: 70px;
  font-size: 35px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
  animation-name: fadeInUp;
  animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
`;

export const HeaderButtons = styled.div`
  object-fit: cover;
  justify-content: space-between;

  button {
    border: 1px solid rgb(211, 220, 230);
    background-color: #343a40;
    color: #fff;
    border-radius: 5px 5px 5px 5px;
    padding: 13px 40px;
    width: 175px;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: ${(props) => props.theme.fontColorPrimary};
      border: 1px solid rgb(211, 220, 230);
    }

    @media (max-width: 450px) {
    width: 163px;
  }
  }

  @media (max-width: 450px) {
    display: flex;
     flex-direction: column;
     align-items: center;
  }

  @media (max-width: 390px) {
    display: flex;
     flex-direction: column;
     align-items: center;
  }
`;

export const ViewPublication = styled(HeaderButtons)`
padding-top: 20px;
  button {
    width: 180px;

    &:hover {
    border: 1px solid rgb(211, 220, 230);
    background-color:rgb(96, 103, 109);
    color: #fff;
    }
  }
  
`;

export const ProjectLinks = styled(HeaderButtons)`
padding-top: 20px;
  button {
    width: 120px;
    padding: 10px 30px;

    &:hover {
    border: 1px solid rgb(211, 220, 230);
    background-color:rgb(96, 103, 109);
    color: #fff;
    }
  }
  
`;

export const P = styled.p`
  font-size: 26px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 50px;
`;

export const A = styled.a`
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
`;




export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const fadeInAndMoveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Move from top (-50px) */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Move to original position */
  }
`;

const fadeInAndMoveRight = keyframes`
   0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const Container = styled.div`
  width: 86%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 225px;
  position: relative;
  padding-bottom: 39px;

  @media (max-width: 767px) {
    position: unset;
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: unset;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding-top: 133px;
  }

  @media (min-width: 1280px) {
    width: 85%;
    padding-top: 184px;
  }

  &.testomonial-class {
    flex-direction: column;
    /* margin-bottom: 100px; */
    padding: 80px 17px 70px 17px;
  }
`;
export const LeftContainer = styled.div`
  max-width: 600px;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;
`;
export const Proffesion = styled.div`
  font-size: 30px;
  font-weight: 700;

  span {
    /* color: #fec347;  */
    background: linear-gradient(to right, #fec347 0%, #ffffff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow:blue 0px 3px 1px; */
  }
  h3 {
    animation: slide 1s ease forwards;
    animation-delay: 0.7s;
    color: #fec347;
  }
`;
export const Paragraph = styled.div`
  font-size: 15px;
  color: #fff;
  margin-top: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ConnectButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
  color: black;
  width: 100%;
  max-width: 166px;
  border: none;
  background-color: #fec347;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 800;
  padding: 10px 0;

  svg {
    font-size: 20px;
    margin-left: 4px;
    text-align: center;
    color: white;
    path {
      stroke: white;
      fill: white;
    }
  }
`;

export const FButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  width: 100%;
  max-width: 166px;
  cursor: pointer;
  color: #fec347;
  background-color: transparent;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #fec347;
  padding: 10px 0;

  &:hover {
    box-shadow: 0 0 10px #fec347;
  }

  svg {
    width: 25px;
    height: 40px;
    margin-left: 8px;
    text-align: center;
`;
export const SocialSec = styled.div`
  display: inline-flex;
`;
export const AnkerTag = styled.a`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #fec347;
  border-radius: 50%;
  font-size: 20px;
  color: #fec347;
  text-decoration: none;
  margin: 30px 15px 30px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fec347;
    color: white;
    box-shadow: 0 0 20px #fec347;
    transition: all 0.75s ease;
  }
`;
export const SocialIcon = styled.div`
  font-size: 15px;
`;
export const RightContainer = styled.div`
  position: absolute;
  width: 64%;
  right: -92px;
  animation: ${fadeInAndMoveRight} 2s ease-in-out;

  @media (max-width: 767px) {
    position: unset;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 66%;
  right: -60px;
  }

  @media (min-width: 1280px) {
    width: 66%;
  right: -88px;
  }
`;

export const BoxContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.second};
  width: 50%;
  border-right: none;
  z-index: 1;
  animation: fadeInAndMoveRight1 1.5s ease-out;

  @keyframes fadeInAndMoveRight1 {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const SecondBoxContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.second};
  width: 50%;
  border-left: none;
  z-index: 1;
  animation: fadeInAndMoveRight2 1.5s ease-out;

  @keyframes fadeInAndMoveRight2 {
    0% {
      opacity: 0;
      transform: translateX(150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const Image = styled.img`
  position: absolute;
  top: -68px;
  width: 255px;
  height: 319px;
  right: 44px;
  z-index: 10;
  animation: fadeInAndMoveDown1 2s ease-in-out;

  @keyframes fadeInAndMoveDown1 {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 5;
      transform: translateY(0px);
    }
  }
`;
export const UploadFileModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 602px;
  padding: 20px;
  border-radius: 24px;
  border: 1px;
  gap: 10px;
  border: 1px solid #1b202b;
  padding: 40px 40px;
  background: #140c1c;
`;