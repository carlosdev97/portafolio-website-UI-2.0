import Container from "../Container/Container";
import styled from "styled-components";
import "../../../src/index.css";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 94px 0;
`;

const StyledAboutHeader = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledInfoTitle = styled.h1`
  color: white;
  font-family: "Inter", serif;
  font-weight: 800;
  font-size: 32px;
  margin: 0;
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledDot = styled.div`
  background-color: rgb(162, 230, 53);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(162, 230, 53, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    }
  }
`;

const StyledStatusText = styled.span`
  color: var(--color-tertiary);
`;

const StyledAboutContent = styled.div``;

const StyledContentTitle = styled.h3`
  color: var(--color-tertiary);
`;

const StyledContentText = styled.p`
  color: var(--color-secondary);
  font-family: "Inter", sans-serif;
  tab-size: 4;
  line-height: 24px;
  font-weight: 500;
`;

const StyledContentLink = styled.a``;

const StyledContentButton = styled.button`
  background-color: rgba(234, 88, 12, 0.7);
  padding: 8px;
  width: 176px;
  height: 40px;
  border-radius: 6px;
  border: none;
  color: var(--color-primary);
  font-weight: 600;
  font-family: "Inter", sans-serif;
  line-height: 24px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <StyledSection>
        <StyledAboutHeader>
          <StyledImage
            src="https://github.com/carlosdev97.png"
            alt="Foto Carlos López"
          />
          <StyledInfo>
            <StyledInfoTitle>Carlos López</StyledInfoTitle>
            <StyledStatus>
              <StyledDot />
              <StyledStatusText>Available to work</StyledStatusText>
            </StyledStatus>
          </StyledInfo>
        </StyledAboutHeader>
        <StyledAboutContent>
          <StyledContentTitle>ABOUT ME</StyledContentTitle>
          <StyledContentText>
            Como Desarrollador Web en constante evolución, me destaco por mi
            meticulosidad, capacidad de autoaprendizaje y espíritu colaborativo,
            cualidades que me permiten aportar soluciones detalladas, bien
            fundamentadas y orientadas al trabajo en equipo en cada proyecto.
            Estas habilidades fortalecen mi desempeño dentro de equipos
            multidisciplinarios, permitiéndome adaptarme y aprender de manera
            continua. Los desafíos me motivan a seguir creciendo, tanto personal
            como profesionalmente, impulsando siempre el desarrollo de ideas
            valiosas y sostenibles. Fuera del ámbito laboral, me inspiro en ser
            un buen hijo y una excelente pareja.
          </StyledContentText>
          <StyledContentLink href="https://carloslopez.dev">
            <StyledContentButton>View Curriculum</StyledContentButton>
          </StyledContentLink>
        </StyledAboutContent>
      </StyledSection>
    </Container>
  );
};

export default AboutMe;
