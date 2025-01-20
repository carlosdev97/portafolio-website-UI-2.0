import React from "react";
import styled, { keyframes } from "styled-components";

// Animación de deslizamiento continuo
const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Contenedor principal
const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: #000; /* Fondo opcional */
  color: #fff; /* Color del texto */
`;

// Contenedor deslizante
const SlidingContent = styled.div`
  display: flex;
  animation: ${slide} 10s linear infinite;
  width: max-content;
`;

// Texto individual
const Text = styled.div`
  display: inline-block;
  padding-right: 6px; /* Ajusta el espacio entre repeticiones */
`;

const Marquee = ({ text }) => {
  return (
    <MarqueeContainer>
      <SlidingContent>
        <Text>{text}</Text>
        <Text>{text}</Text> {/* Duplicado para flujo continuo */}
      </SlidingContent>
    </MarqueeContainer>
  );
};

export default Marquee;
