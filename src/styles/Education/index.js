import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap:26px;
  padding: 0px 120px;

  @media (max-width: 767px) {
    padding: 0px 40px;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;
export const IconWrap = styled.div`
width: 100%;
max-width: 100px;
display: flex;
justify-content: center;
     svg{
          width: 30px;
          height: 35px;
          backface-visibility: visible !important;
          color:#ffffffb3;
     }
`

export const Box = styled.div`
  width: 46%;
  padding: 30px 0;
  display: flex;
  border: 1px solid #939090;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 

  &:hover{
    background-color: #212129;
    border: none;
  }

  @media (max-width: 1024px){
    width: 100%;
    padding: 20px;
  }

`;
export const BoxWrapper = styled(Box)`
max-width: unset;
padding: unset;
border: none;
  display: flex;
  box-shadow: unset;
`;

export const SecondEduWrapper = styled.div`
 width: 100%;
 border: 1px solid #939090;
 padding: 30px 0;
 display: flex;
 transition: background-color 0.3s ease, box-shadow 0.3s ease; 

 &:hover{
  background-color: #212129;
  border: none;
  }

  @media (max-width: 767px){
    padding: 20px;
  }
`;
export const DateWrapper = styled.div`
  font-size: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 30px;
  color: #ffffffb3;
`;

export const Degree = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
export const AboutDegree = styled.div`
  color: #ffffffb3;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  font-family: Poppins, sans-serif;
`;

export const CollegeHeading = styled.div`
  color: #fec347;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  font-family: Poppins, sans-serif;
`;



