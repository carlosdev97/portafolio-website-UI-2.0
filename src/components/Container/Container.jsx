import styled from "styled-components";

const breakpoints = {
  mobile: "480px", // Teléfonos
  tablet: "768px", // Tablets
  desktop: "1024px", // Escritorio grande
};

const StyledContainer = styled.div`
  max-width: 1000px; /* Ancho máximo para pantallas grandes */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  padding: 16px; /* Espaciado interno */
  box-sizing: border-box;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 900px; /* Ajusta el ancho en pantallas más pequeñas */
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 720px; /* Ancho más reducido para tablets */
    padding: 12px; /* Reduce el padding */
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%; /* Usa todo el ancho disponible en móviles */
    padding: 8px; /* Padding más pequeño */
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
