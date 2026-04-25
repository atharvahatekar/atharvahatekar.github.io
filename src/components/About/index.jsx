import React from "react";
import ProfilePic from "assets/images/profile-pic.jpeg";
import {
  AboutDiv,
  Column,
  AboutInfo,
  AboutInfoP,
} from "styles/About";

import { Container, H1Skills } from "styles/index";

const About = () => {
  return (
    <Container>
      <AboutDiv id="about">
        <Column>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ProfilePic} alt="me" />
            </div>
          </div>
        </Column>
        <Column>
          <H1Skills>About Me</H1Skills>
          <AboutInfo>
            <AboutInfoP>
            I am Atharva Hatekar, currently pursuing a Master’s in Artificial Intelligence at Brandenburgische Technische Universität, 
            Germany. I hold a Bachelor’s degree in Computer Science and Engineering from Lovely Professional University, India.
            Professionally, I am working as a Data Science Intern at Metso, Frankfurt, Germany, and have previously worked as a Data Analyst 
            and Software Developer at Dreamwarez, India.
            </AboutInfoP>
            <AboutInfoP>
            Beyond my professional endeavors, I am a sports enthusiast, proudly holding gold medals in American Football and Rugby 
            at national championships. I also have a deep passion for music, and I enjoy singing as well as playing the guitar and drums.
            </AboutInfoP>
          </AboutInfo>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
