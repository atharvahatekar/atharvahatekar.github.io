import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceListIcon,
  ServiceText,
  MainWrapper,
} from "styles/Publication/index";
import { A, ViewPublication } from "styles/Banner";
import { Container, H1 } from "styles/index";
const Publication = () => {
  return (
    <Container id="publication">
      <MainWrapper>
        <H1>Publication</H1>
        <QuoteContainer>
          <p className="quote">
            <QuoteContent>
              Passenger Security Using Facial Emotion Recognition System
            </QuoteContent>
            <ServiceList>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                The publication introduces a novel application of deep convolutional neural networks (DCNN) for facial emotion recognition, 
                aiming to enhance passenger safety in taxis by detecting and responding to fear-related emotions.
                </ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                The system identifies human emotions such as happiness, sadness, anger, and fear in real time. 
                It generates automatic alerts to taxi companies if a passenger exhibits signs of fear for an extended period, 
                contributing to security and trust in transportation services.
                </ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                The research leverages datasets like Cohn-Kanade and employs state-of-the-art algorithms, including HAAR cascade 
                functions for face detection and local binary pattern techniques for feature extraction, to ensure high accuracy in 
                emotion detection.
                </ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                The work is a collaboration with multiple researchers and utilizes Python, OpenCV, and TensorFlow/Keras to create a 
                scalable and efficient solution for integrating emotion recognition in smart environments.
                </ServiceText>
              </ServiceListItem>



              <ViewPublication>
                <button>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${process.env.PUBLIC_URL}/Publication.pdf`}
                  >
                    View Publication
                  </A>
                </button>
              </ViewPublication>
            </ServiceList>
            {/* <QuoteAuthor>- Théoden, son of Thengel</QuoteAuthor> */}
          </p>
        </QuoteContainer>
      </MainWrapper>
    </Container>
  );
};

export default Publication;
