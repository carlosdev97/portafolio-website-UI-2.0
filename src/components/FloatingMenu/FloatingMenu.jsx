import styled from "styled-components";
import Container from "../Container/Container";
import {
  TbUser,
  TbBriefcase,
  TbSchool,
  TbStack2,
  TbMail,
} from "react-icons/tb";

const StyledFloatingMenu = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  backdrop-filter: blur(10px); /* Efecto de desenfoque */
  -webkit-backdrop-filter: blur(
    10px
  ); /* Compatibilidad con navegadores webkit */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Borde opcional para mejor visibilidad */
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
    <Container>
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
    </Container>
  );
};

export default FloatingMenu;
