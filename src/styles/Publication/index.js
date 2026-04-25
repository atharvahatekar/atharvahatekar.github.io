import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const QuoteContainer = styled.div`
  color: Black;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #212129;
  height: auto;
  border-radius: 5px;
  padding: 25px;
  transition: background-color 0.3s ease-in-out;
  p {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: unset;
    box-shadow: #939090 0px 0px 10px;
  }
`;

export const QuoteContent = styled.span`
  padding-left: 40px;
  display: inline-block;
  font-size: 20px;
  color: #fec347;
  font-weight: 600;
  @media (max-width: 767px) {
    padding-left: unset;
    text-align: center;
  }
`;

export const ServiceList = styled.ul`
  padding: 18px 0 5px 65px;
  width: 90%;

  @media (max-width: 767px) {
    padding: unset;
    width: unset;
    padding-top: 20px;
  }
`;

export const MainWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  gap: 15px;
`;

export const ServiceListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  font-size: 20px;
`;

export const ServiceListIcon = styled(BiCheck)`
  color: #b3b9c5;
`;

export const ServiceText = styled.p`
  font-size: 1rem;
  color: #b3b9c5;
`;
