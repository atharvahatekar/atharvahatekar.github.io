import styled from "styled-components";

export const QuoteContainer = styled.div`
  color: Black;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 5px;
  height: 50vh;
  padding: 0 15px;
  transition: background-color 0.3s ease-in-out;
  p {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1920px) {
    height: auto;
    padding: 0 25px;
  }
`;

export const RoleText = styled.div`
  background: #fec347;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
`

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  background: ${({ icon }) => `url(${icon})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const QuoteContent = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #fec347;
  font-weight: 600;
  font-family: Poppins, sans-serif;

  svg {
    font-size: 40px;
    color: #b3b9c5;
  }
`;

export const ServiceList = styled.ul`
  padding: 4px 0 5px 22px;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 1920px) {
    padding: 6px 0 5px 22px;
    margin-left: 24px;
  }

  border-left: 3px solid #b3b9c5;
`;

export const TimePeriod = styled.div`
  width: 100%;
  color: #b3b9c5;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  gap: 50px;
`;

export const ServiceListItem = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 0.5rem;
  align-items: center;
  font-size: 20px;
  color: #fff;
  padding-top: 5px;

  @media (max-width: 1920px) {
    padding-top: 15px;
  }
`;

export const ServiceText = styled.p`
  font-size: 1rem;
  color: #b3b9c5;
`;

export const Location = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
