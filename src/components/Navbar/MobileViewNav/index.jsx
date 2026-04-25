import React from "react";
import { InnerWrapper, MainContainer , NavItem} from "styles/Navbar";
import { menus } from "components/Navbar/data.js";

const MobileViewNav = ({ setStateFunc }) => {

  return (
    <div>
      <MainContainer className="landing-nav">
        <InnerWrapper>
            {menus.map((item) => (
              <a key={item.id} href={`#${item.css}`}  onClick={() => setStateFunc()}>
                <NavItem>{item.name}</NavItem>
              </a>
            ))}
        </InnerWrapper>
      </MainContainer>
    </div>
  );
};

export default MobileViewNav;

