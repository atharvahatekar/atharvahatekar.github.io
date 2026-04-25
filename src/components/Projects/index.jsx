import React from "react";
import IMG1 from "../../assets/images/movierecommand.png";
import IMG2 from "../../assets/images/customerChurn.png";
import IMG3 from "../../assets/images/cricketanalytics.png";
import IMG4 from "../../assets/images/nlpChatbot.png";
import IMG5 from "../../assets/images/butterflyrecognition.png";
import IMG6 from "../../assets/images/newsresearchertool.png";
import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioItem,
  PortfolioImage,
  ServiceBoxHeader,
  ServiceBoxP,
} from "styles/Project";
import { A, ProjectLinks } from "styles/Banner";
import { Container, H1 } from "styles/index";

const data = [
  {
    id: 1,
    image: IMG1,
    project_name: "Movie Recommendation System",
    title: "Build using content-based filtering and collaborative filtering",
    github: "https://github.com/atharvahatekar/Movie-Recommendation-System",
  },
  {
    id: 2,
    image: IMG2,
    project_name: "Customer Churn Prediction",
    title: "Build using Pandas, Scikit-learn, and Streamlit",
    github: "https://github.com/atharvahatekar/Customer-Churn-Prediction",
  },
  {
    id: 3,
    image: IMG3,
    project_name: "Cricket Analytics Pro",
    title: "Build using PowerBI, DAX, and Python",
    github: "https://github.com/atharvahatekar/Cricket-Analytics-Pro",
  },
  {
    id: 4,
    image: IMG4,
    project_name: "Food Delivery NLP Chatbot",
    title: "Build using NLP and DialogFlow",
    github: "https://github.com/atharvahatekar/Food-Delivery-NLP-Chatbot",
  },
  {
    id: 5,
    image: IMG5,
    project_name: "Butterfly Recognition System",
    title: "Build using CNN, Convolutional AutoEncoder",
    github: "https://github.com/atharvahatekar/Butterfly-Recognition-and-Segmentation",
  },
  {
    id: 6,
    image: IMG6,
    project_name: "Equity News Researcher Tool",
    title: "Build using LangChain, LLM, FAISS, and Streamlit",
    github: "https://github.com/atharvahatekar?tab=repositories",
  },
];

const Projects = () => {
  return (
    <Container id="project">
      <PortfolioSection>
        <H1>Projects</H1>
        <PortfolioContainer>
          {data.map(({ id, image, project_name, title, github, demo }) => (
            <PortfolioItem key={id}>
              <PortfolioImage>
                <img src={image} alt={title} />
              </PortfolioImage>
              <ServiceBoxHeader style={{ textAlign: "center" }}>
                {project_name}
              </ServiceBoxHeader>
              <ServiceBoxP>{title}</ServiceBoxP>
              <ProjectLinks>
                <button>
                  <A
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </A>
                </button>
              </ProjectLinks>
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </PortfolioSection>
    </Container>
  );
};

export default Projects;
