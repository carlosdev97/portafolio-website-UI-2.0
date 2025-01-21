import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  TbUser,
  TbBriefcase,
  TbSchool,
  TbStack2,
  TbMail,
  TbSun,
  TbMoon,
} from "react-icons/tb";

const StyledFloatingMenu = styled.div`
  width: 350px;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledMenuNav = styled.nav``;

const StyledNavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0;
`;

const StyledNavItem = styled.li`
  list-style: none;
  font-size: 24px;
`;

const StyledNavLink = styled.a`
  color: black;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledTbMoon = styled(TbMoon)`
  ${(props) =>
    props.rotate &&
    css`
      animation: ${rotateAnimation} 0.5s linear;
    `}
`;
const StyledTbSun = styled(TbSun)`
  ${(props) =>
    props.rotate &&
    css`
      animation: ${rotateAnimation} 0.5s linear;
    `}
`;

const FloatingMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleIconClick = () => {
    setDarkMode(!darkMode);
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  return (
    <StyledFloatingMenu>
      <StyledMenuNav>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink href="#">
              <TbUser />
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">
              <TbBriefcase />
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">
              <TbSchool />
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">
              <TbStack2 />
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">
              <TbMail />
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            {darkMode ? (
              <StyledTbSun rotate={rotate} onClick={handleIconClick} />
            ) : (
              <StyledTbMoon rotate={rotate} onClick={handleIconClick} />
            )}
          </StyledNavItem>
        </StyledNavList>
      </StyledMenuNav>
    </StyledFloatingMenu>
  );
};

export default FloatingMenu;
