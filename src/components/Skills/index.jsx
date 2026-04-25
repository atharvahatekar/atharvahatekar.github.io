import React from "react";
import Marquee from "react-fast-marquee";
import { BsDatabase } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import { AiFillOpenAI } from "react-icons/ai";
import PowerBI from "assets/svg/PowerBi";
import DataAnylitics from "assets/svg/dataAnalytic";
import Statistic from "assets/svg/Statistic";
import MachineLearning from "assets/svg/MachineLearning";
import GenerativeAi from "assets/images/chip.png";
import {
  SiScikitlearn,
  SiTensorflow,
  SiLangchain,
  SiSpacy,
  SiStreamlit,
  SiPytorch,
  SiOllama,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import {
  SkillsContainer,
  Col,
  BoxDiv,
  SkillBox,
  SkillBoxText,
  Common,
} from "styles/Skills";
import { Container, H1 } from "styles/index";

import("./skills.css");

const Skills = () => {
  const projects = [
    {
      id: 0,
      project_name: "Python",
      project_desc: (
        <img
          alt="svgImg"
          className="commonIcons"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik0yNC4wNDcsNWMtMS41NTUsMC4wMDUtMi42MzMsMC4xNDItMy45MzYsMC4zNjdjLTMuODQ4LDAuNjctNC41NDksMi4wNzctNC41NDksNC42N1YxNGg5djJIMTUuMjJoLTQuMzVjLTIuNjM2LDAtNC45NDMsMS4yNDItNS42NzQsNC4yMTljLTAuODI2LDMuNDE3LTAuODYzLDUuNTU3LDAsOS4xMjVDNS44NTEsMzIuMDA1LDcuMjk0LDM0LDkuOTMxLDM0aDMuNjMydi01LjEwNGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyQzI3LjQwNiw1LjM1OSwyNS41ODksNC45OTQsMjQuMDQ3LDV6IE0xOS4wNjMsOWMwLjgyMSwwLDEuNSwwLjY3NywxLjUsMS41MDJjMCwwLjgzMy0wLjY3OSwxLjQ5OC0xLjUsMS40OThjLTAuODM3LDAtMS41LTAuNjY0LTEuNS0xLjQ5OEMxNy41NjMsOS42OCwxOC4yMjYsOSwxOS4wNjMsOXoiLz48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNMjMuMDc4LDQzYzEuNTU1LTAuMDA1LDIuNjMzLTAuMTQyLDMuOTM2LTAuMzY3YzMuODQ4LTAuNjcsNC41NDktMi4wNzcsNC41NDktNC42N1YzNGgtOXYtMmg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0YzAsMi45NjYtMi42ODYsNS44OTYtNS43NjQsNS44OTZoLTcuMjM2Yy0yLjUyMywwLTUsMS44NjItNSw0LjM3N3Y4LjU4NmMwLDIuNDM5LDEuNzU5LDQuMjYzLDQuMjE4LDQuNjcyQzE5LjcxOSw0Mi42NDEsMjEuNTM2LDQzLjAwNiwyMy4wNzgsNDN6IE0yOC4wNjMsMzljLTAuODIxLDAtMS41LTAuNjc3LTEuNS0xLjUwMmMwLTAuODMzLDAuNjc5LTEuNDk4LDEuNS0xLjQ5OGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ii8+PC9zdmc+"
        />
      ),
      color: "yellow",
    },
    {
      id: 1,
      project_name: "SQL",
      project_desc: <BsDatabase className="commonIcons" />,
      color: "#00d8ff",
    },
    {
      id: 2,
      project_name: "PowerBI",
      project_desc: <PowerBI className="commonIcons" />,
      color: "#f3c91b",
    },
    {
      id: 3,
      project_name: "SciKit Learn",
      project_desc: <SiScikitlearn className="commonIcons" />,
      color: "#ff8f73",
    },
    {
      id: 4,
      project_name: "TensorFlow",
      project_desc: <SiTensorflow className="commonIcons" />,
      color: "#ff6f00",
    },
    {
      id: 5,
      project_name: "LangChain",
      project_desc: <SiLangchain className="commonIcons" />,
      color: "#a58f9f",
    },
    {
      id: 6,
      project_name: "Pytorch",
      project_desc: <SiPytorch className="commonIcons" />,
      color: "#f7684b",
    },
    {
      id: 7,
      project_name: "OpenAI",
      project_desc: <AiFillOpenAI className="commonIcons" />,
      color: "#0fe891",
    },
  ];

  const project2 = [
    {
      id: 0,
      project_name: "spaCy",
      project_desc: <SiSpacy className="commonIcons" />,
      color: "#4ad1f3",
    },
    {
      id: 1,
      project_name: "LLama",
      project_desc: <SiOllama className="commonIcons" />,
      color: "#fbaf58",
    },
    {
      id: 2,
      project_name: "VSCode",
      project_desc: <VscVscodeInsiders className="commonIcons" />,
      color: "#00bfff",
    },
    {
      id: 3,
      project_name: "StreamLit",
      project_desc: <SiStreamlit className="commonIcons" />,
      color: "#f93c5f",
    },
    {
      id: 4,
      project_name: "GIT",
      project_desc: <FaGithub className="commonIcons" />,
      color: "#fff",
    },
    {
      id: 5,
      project_name: "MSOffice",
      project_desc: (
        <img
          alt="svgImg"
          className="commonIcons"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iWWp4Z3FpZHoySlQxUEFCY1l0RkU1YSIgeDE9IjMxLjY0NSIgeDI9IjMxLjY0NSIgeTE9IjYuODM5IiB5Mj0iNDAuNjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTY4ZTAwIi8+PHN0b3Agb2Zmc2V0PSIuMDM2IiBzdG9wLWNvbG9yPSIjZTM4NDAwIi8+PHN0b3Agb2Zmc2V0PSIuMTcxIiBzdG9wLWNvbG9yPSIjZGI2MjAwIi8+PHN0b3Agb2Zmc2V0PSIuMjk5IiBzdG9wLWNvbG9yPSIjZDQ0YTAwIi8+PHN0b3Agb2Zmc2V0PSIuNDE3IiBzdG9wLWNvbG9yPSIjZDAzYjAwIi8+PHN0b3Agb2Zmc2V0PSIuNTE1IiBzdG9wLWNvbG9yPSIjY2YzNjAwIi8+PHN0b3Agb2Zmc2V0PSIuODc4IiBzdG9wLWNvbG9yPSIjZDIyOTAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDQyNDAwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1lqeGdxaWR6MkpUMVBBQmNZdEZFNWEpIiBkPSJNMzUuODgzLDcuMzQxQzM3LjcyNiw3Ljg1LDM5LDkuNTA4LDM5LDExLjM5N3YyNS4xNjJjMCwxLjkwNi0xLjMwMSwzLjU3LTMuMTY4LDQuMDY1CUwyNC4yOSw0My44NjNMMjgsMzZWMTFsLTMuMTQ4LTYuODg1TDM1Ljg4Myw3LjM0MXoiLz48bGluZWFyR3JhZGllbnQgaWQ9IllqeGdxaWR6MkpUMVBBQmNZdEZFNWIiIHgxPSIxMy45MjIiIHgyPSIyOS4wNTEiIHkxPSIzNC45NTEiIHkyPSI0MS4wNzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmNTI1MzciLz48c3RvcCBvZmZzZXQ9Ii4yOTMiIHN0b3AtY29sb3I9IiNmMzI1MzYiLz48c3RvcCBvZmZzZXQ9Ii40NjUiIHN0b3AtY29sb3I9IiNlYTI0MzQiLz48c3RvcCBvZmZzZXQ9Ii42MDUiIHN0b3AtY29sb3I9IiNkYzIyMzEiLz48c3RvcCBvZmZzZXQ9Ii43MjkiIHN0b3AtY29sb3I9IiNjODIwMmMiLz48c3RvcCBvZmZzZXQ9Ii44NDEiIHN0b3AtY29sb3I9IiNhZTFlMjUiLz48c3RvcCBvZmZzZXQ9Ii45NDQiIHN0b3AtY29sb3I9IiM4ZjFhMWQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3YTE4MTgiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjWWp4Z3FpZHoySlQxUEFCY1l0RkU1YikiIGQ9Ik0yOCwzNXYzLjkyN2MwLDMuODAzLTMuODI0LDYuMjQ5LTcuMDE5LDQuNDkxbC02LjkzNi00LjQ0NQljLTAuODAyLTAuNDY2LTEuMjM2LTEuNDYyLTAuOTY0LTIuNDU3QzEzLjMzNCwzNS41OSwxNC4yMDIsMzUsMTUuMTE1LDM1SDI4eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iWWp4Z3FpZHoySlQxUEFCY1l0RkU1YyIgeDE9IjUuMzgyIiB4Mj0iMjUuODc0IiB5MT0iMzIuMjg5IiB5Mj0iMS43OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5NmFiMSIvPjxzdG9wIG9mZnNldD0iLjEzNyIgc3RvcC1jb2xvcj0iI2Q5NTM4YiIvPjxzdG9wIG9mZnNldD0iLjQ5NSIgc3RvcC1jb2xvcj0iI2Q5MWEyYSIvPjxzdG9wIG9mZnNldD0iLjU3NSIgc3RvcC1jb2xvcj0iI2QzMWEyOSIvPjxzdG9wIG9mZnNldD0iLjY4IiBzdG9wLWNvbG9yPSIjYzIxOTI2Ii8+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2E3MTgyMSIvPjxzdG9wIG9mZnNldD0iLjkyOSIgc3RvcC1jb2xvcj0iIzgxMTYxOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY5MTUxNSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNZanhncWlkejJKVDFQQUJjWXRGRTVjKSIgZD0iTTIxLjk0Niw0LjUyNmwtMTEuOTI0LDYuNzg2QzguNzcyLDEyLjAyNCw4LDEzLjM1MSw4LDE0Ljc4OXYxOC40MjkJYzAsMS4zNTcsMS40NTksMi4yMTUsMi42NDUsMS41NTRsNC40NzItMi40OTFDMTUuNjYyLDMxLjk3OCwxNiwzMS40MDIsMTYsMzAuNzc4VjE3Ljc0M2MwLTEuMzA3LDAuNzgtMi40OCwxLjk2My0yLjk0OUwyOCwxMS4zMDgJdi0zLjA5QzI4LDUuMDE0LDI0LjY2OSwyLjk4MywyMS45NDYsNC41MjZ6Ii8+PC9zdmc+"
        />
      ),
      color: "#f76b45",
    },
  ];

  const proficiencies = [
    {
      id: 0,
      project_name: "Data Analytics",
      project_desc: <DataAnylitics className="commonIcons" />,
      color: "#5a83fc",
    },
    {
      id: 1,
      project_name: "Statistics",
      project_desc: <Statistic className="commonIcons" />,
      color: "#9fb3ea",
    },
    {
      id: 2,
      project_name: "Generative Ai",
      project_desc: <img src={GenerativeAi} style={{width:'76px', height:'76px', marginBottom:'26px'}} alt="Generative Ai" className="commonIcons" />,
      color: "#ad78ee",
    },
    {
      id: 3,
      project_name: "Machine learning",
      project_desc: <MachineLearning className="commonIcons" />,
      color: "#66b5ff",
    },
  ];

  const skillBoxStyle = {
    backgroundColor: "#212129",
    // boxShadow: `#ebb42c 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px`,
  };

  return (
    <Container id="skills">
      <SkillsContainer>
        <Common>
          <H1>Skills & Tools</H1>
        </Common>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {projects.map((item) => (
                <BoxDiv
                  className="skill--box"
                  key={item.id}
                  style={skillBoxStyle}
                >
                  <SkillBox>
                    <div style={{ color: item.color }}>
                      {" "}
                      {item.project_desc}
                    </div>
                    <SkillBoxText style={{ color: item.color }}>
                      {item.project_name}
                    </SkillBoxText>
                  </SkillBox>
                </BoxDiv>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {project2.map((item) => (
                <BoxDiv
                  className="skill--box"
                  key={item.id}
                  style={skillBoxStyle}
                >
                  <SkillBox>
                    <div style={{ color: item.color }}>
                      {" "}
                      {item.project_desc}
                    </div>
                    <SkillBoxText style={{ color: item.color }}>
                      {item.project_name}
                    </SkillBoxText>
                  </SkillBox>
                </BoxDiv>
              ))}
            </Marquee>
          </div>
        </div>
        <Common style={{ marginTop: "45px" }}>
          <H1>Proficiencies</H1>
        </Common>
        <Col className="colorProficiencies">
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                <div style={{ color: item.color }}> {item.project_desc}</div>
                <SkillBoxText style={{ color: item.color }}>
                  {item.project_name}
                </SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
