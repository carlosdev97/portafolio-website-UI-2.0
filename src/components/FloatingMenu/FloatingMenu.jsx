import styled from "styled-components";
import {
  TbUser,
  TbBriefcase,
  TbSchool,
  TbStack2,
  TbMail,
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
`;

const StyledNavLink = styled.a`
  color: black;
  font-size: 24px;
`;

const FloatingMenu = () => {
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
        </StyledNavList>
      </StyledMenuNav>
    </StyledFloatingMenu>
  );
};

export default FloatingMenu;
