import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceText,
  MainWrapper,
  Location,
  DataWrapper,
  TimePeriod,
  RoleText,
  Circle,
} from "styles/Experience";
import Metso from "assets/images/metso.png"
import Dreamwarez from "assets/images/dream-warez.jpg"
import { Container, H1 } from "styles/index";

const serviceData = [
  {
    Role: "Data Science Intern",
    location: "Metso, Frankfurt, Germany",
    TimePeriod: "10/ 2024 - Present",
    icon: Metso,
    services: [
      "Implemented time series forecasting for predictive maintenance, integrating solutions into a CI/CD pipeline.",
      "Deployed a gRPC backend to retrieve real-time plant data from ACT software, which helps for outlier detection and advanced analysis.",
      "Collaborated with the R&D team to develop rule-based anomaly detection, utilizing MLOps frameworks like MLflow for robust model deployment, monitoring, and performance optimization",
    ],
  },
  {
    Role: "Data Analyst",
    location: "Dreamwarez, Pune, India",
    TimePeriod: "02/ 2022 - 01/ 2023",
    icon: Dreamwarez,
    services: [
      "Designed BI dashboards to visualize trends and created measures for KPIs by using DAX, Enabled customers to make crucial decisions that significantly boosted their business performance.",
      "Utilized Pandas, SQL to perform data cleaning and transformation, extracting actionable insights to support decision-making",
      "Leveraged machine learning and exploratory data analysis on complex datasets for advanced data analytics.",
    ],
  },
  {
    Role: "Software Developer Intern",
    location: "Dreamwarez, Pune, India",
    icon: Dreamwarez,
    TimePeriod: "06/ 2021 - 01/ 2022",
    services: [
      "Developed web applications, improving user experience by integrating responsive designs and streamlined functionality.",
      "Collaborated within an agile development team to implement new features, debug issues, and optimize existing code, ensuring timely project delivery.",
      "Conducted thorough validations on web forms, enhancing data accuracy and improving overall system reliability by identifying and resolving input discrepancies.",
    ],
  },
];

const Experience = () => {
  return (
    <Container id="experience">
      <DataWrapper>
        <H1>Work Experience</H1>
        <MainWrapper>
          {serviceData.map((service, index) => (
            <QuoteContainer key={index}>
              <p className="quote">
                <QuoteContent>
                  <Circle icon={service.icon}></Circle>

                  <RoleText>{service.location}</RoleText>
                </QuoteContent>
                <ServiceList>
                  <Location>{service.Role}</Location>
                  <TimePeriod>{service.TimePeriod}</TimePeriod>

                  {service.services.map((text, idx) => (
                    <ServiceListItem key={idx}>
                      •<ServiceText>{text}</ServiceText>
                    </ServiceListItem>
                  ))}
                </ServiceList>
              </p>
            </QuoteContainer>
          ))}
        </MainWrapper>
      </DataWrapper>
    </Container>
  );
};

export default Experience;
