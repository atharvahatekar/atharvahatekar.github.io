import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Box,
  BoxContainer,
  DateWrapper,
  Degree,
  BoxWrapper,
  EducationWrapper,
  SecondEduWrapper,
  IconWrap,
  AboutDegree,
  CollegeHeading,
} from "styles/Education";
import { Container, H1 } from "styles/index";
import { FaUserGraduate } from "react-icons/fa";

const Educations = () => {
const [screenType, setScreenType] = useState("desktop");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 767) {
          setScreenType("mobile");
        } else if (window.innerWidth > 767 && window.innerWidth <= 1124) {
          setScreenType("tab");
        } else {
          setScreenType("desktop");
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  return (
    <Container id="education">
      <MainContainer>
        <EducationWrapper>
          <H1>Education</H1>
          <BoxContainer>
            <Box>
              {screenType === "mobile" || screenType === "tab" ? (
                ""
              ) : (
                <IconWrap>
                  <FaUserGraduate />
                </IconWrap>
              )}
              <div>
                <CollegeHeading>
                  Brandenburgische Technische Universität
                </CollegeHeading>
                <Degree>Masters in Artificial Intelligence</Degree>
                <DateWrapper>April 2023 - Present</DateWrapper>
                <AboutDegree>
                  Key Subjects : Data Mining • Image Processing • Information
                  Retrival{" "}
                </AboutDegree>
              </div>
            </Box>
            <BoxWrapper>
              <SecondEduWrapper>
                {window.innerWidth <= 767 ? (
                  ""
                ) : (
                  <IconWrap>
                    <FaUserGraduate />
                  </IconWrap>
                )}
                <div>
                  <CollegeHeading>
                    Lovely Professional University
                  </CollegeHeading>
                  <Degree>Bachelors in Computer Science and Engineering</Degree>
                  <DateWrapper>June 2017 - June 2021</DateWrapper>
                  <AboutDegree>
                    {" "}
                    Key Subjects : Programming • Data Structure and Algorithm •
                    DBMS
                  </AboutDegree>
                </div>
              </SecondEduWrapper>
            </BoxWrapper>
          </BoxContainer>
        </EducationWrapper>
      </MainContainer>
    </Container>
  );
};

export default Educations;
