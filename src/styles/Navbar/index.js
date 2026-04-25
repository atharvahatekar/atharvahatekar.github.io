import styled from "styled-components";

const Logo = styled.div`
  font-family: "Segoe Script", cursive;
  font-weight: bold;
  font-size: 25px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColorPrimary};
  cursor: pointer;
  &:hover {
    color: #fec347 ;
  }

  div {
    border-bottom: 2.5px solid #fec347;
  }

`;

const NavBarDiv = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 68px;

  @media (max-width: 1124px) {
    padding-left: 20px;
    padding-right: 20px;

    img{
      width: 55px;
      height: 55px;
    }
  }

  @media (max-width: 1920px) {
    height: 80px;
  }
  @media (max-width: 767px) {
    height: 70px;
  }
`;

export const NavBarDiv2 = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  position: fixed;
  width: 100%;
  top: 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  height: 68px;
  @media (max-width: 460px) {
    width: 90%;
  }
`;

const NavItems = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: ${(props) => props.theme.fontColorPrimary};
  font-weight: 500;
  font-size: 18px;
  padding: 0 15px;
  display: block;
  &:hover {
    color: ${(props) => props.theme.fontColorHeader};
  }
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const MobileMenuIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  @media (max-width: 767px) {
    display: inline-flex;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    svg {
      margin-top: 5px;
    }
  }
`;

const MobileRightSection = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    gap: 5.278vw;
  }
`;

const MainContainer = styled.div`
  .css-38tatp-MuiPaper-root-MuiDrawer-paper {
    top: 105px;
  }
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    background-color: unset !important;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    align-items: center;
    padding: 0px 22px 72px 22px;

    &.dashboard-responsive {
      padding: 0px 30px;
      height: 89vh;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 32px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 42px 22px 0px 22px;
    text-align: unset;
    height: unset;

    &.dashboard-responsive {
      padding: 0px 30px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &.landing-nav {
      flex-direction: column;
      align-items: center;
      padding: unset;
      text-align: center;
      justify-content: center;
      height: 81vh;
    }
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export {
  NavBarDiv,
  InnerWrapper,
  NavItems,
  NavItem,
  Logo,
  MobileRightSection,
  MainContainer,
};
