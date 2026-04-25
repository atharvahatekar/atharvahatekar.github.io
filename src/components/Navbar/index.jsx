import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import {
  NavBarDiv,
  NavItems,
  NavItem,
  Logo,
  MobileRightSection,
  MobileMenuIconWrapper,
} from "styles/Navbar";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "assets/svg/MenuIcon";
import CloseIcon from "assets/svg/CloseIcon";
import NameLogo from "assets/images/name-logo.png";
import { menus } from "components/Navbar/data.js";
import MobileViewNav from "components/Navbar/MobileViewNav";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
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

  const setStateFunc = () => {
    setShowMenu(false);
  };

  return (
    <NavBarDiv>
      {screenType === "mobile" || screenType === "tab" ? (
        <img src={NameLogo} alt="logo" />
      ) : (
        (<Logo onClick={() => scroll.scrollToTop()}>
          <p>Atharva Hatekar</p>
          <div></div>
        </Logo>)
      )}

      {/* <NavItems>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavItem key={item.id}>{item.name}</NavItem>
          </Link>
        ))}
      </NavItems> */}
      {screenType === "desktop" && (
        <NavItems>
          {menus.map((item) => (
            <a key={item.id} href={`#${item.css}`}>
              <NavItem>{item.name}</NavItem>
            </a>
          ))}
        </NavItems>
      )}

      {(screenType === "mobile" || screenType === "tab") && (
        <MobileRightSection>
          <MobileMenuIconWrapper onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </MobileMenuIconWrapper>
        </MobileRightSection>
      )}

      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        sx={{ pt: 50, marginTop: "10vw", position: "unset" }}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <MobileViewNav setStateFunc={setStateFunc} />
      </Drawer>
    </NavBarDiv>
  );
}

export default Navbar;
