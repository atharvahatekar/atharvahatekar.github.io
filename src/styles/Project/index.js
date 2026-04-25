import styled from "styled-components";

export const PortfolioSection = styled.section`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const PortfolioItem = styled.article`
  padding: 25px;
  border-radius: 5px;
  background-color: #212129;
  border: 1px solid #021e541a;
  box-shadow: #051e4f57 0px 0px 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: unset;
    box-shadow: #939090 0px 0px 10px;
  }
`;

export const PortfolioImage = styled.div`
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    display: block;
  }
`;

export const ServiceBoxHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  padding-top: 20px;
  color: ${(props) => props.theme.fontColorHeader};
`;

export const ServiceBoxP = styled.div`
    font-size: 14px;
    color: ${(props) => props.theme.fontColorSecondary};
`;
