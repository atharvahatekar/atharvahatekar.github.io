
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  MainContainer,
  Container,
  LeftContainer,
  Proffesion,
  Paragraph,
  ButtonContainer,
  FButton,
  SocialSec,
  AnkerTag,
  RightContainer,
} from "styles/Banner";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer id="home">
      <Container>
        <LeftContainer>
          <Proffesion>
            <h3>Hello There!</h3>
            <h3>
              I'm a{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: [
                      "A Data Scientist",
                      "A Data Analyst",
                      "A Problem Solver",
                    ],
                  }}
                />
              </span>
            </h3>
          </Proffesion>
          <Paragraph>
            <b>Aspiring Data Scientist</b> with over 2 years of industry
            experience in data analytics, machine learning and software
            development. Committed to continuous learning and leveraging data
            science to solve real world problems.
          </Paragraph>
          <SocialSec>
            {/* <AnkerTag href="#">
              <FaFacebookF />
            </AnkerTag> */}
            <AnkerTag href="https://www.instagram.com/atharvahatekar.ai/profilecard/?igsh=MzQ2OGxpeGFuc3p3https://github.com/atharvahatekar">
              <RiInstagramFill />
            </AnkerTag>
            <AnkerTag href="https://www.linkedin.com/in/atharvahatekar/">
              <AiFillLinkedin />
            </AnkerTag>
            <AnkerTag href="https://github.com/atharvahatekar">
              <AiOutlineGithub />
            </AnkerTag>
            {/* <AnkerTag href="#">
              <RiGitlabFill />
            </AnkerTag> */}
          </SocialSec>

          <ButtonContainer>
            <FButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.PUBLIC_URL}/Atharva-Resume.pdf`}
            >
              Resume
            </FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          {/* <BoxContainer></BoxContainer>
          <SecondBoxContainer></SecondBoxContainer>
          
          <Image src={portimage} /> */}
          {isMobile ? (
            ""
          ) : (
            <DotLottieReact
              src="https://lottie.host/140bd3ab-b51d-4fe3-b360-bde5a76bcf46/uaZYgKeLcA.lottie"
              loop
              autoplay
              style={{ width: "unset", height: "unset" }}
            />
          )}
        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default Banner;
