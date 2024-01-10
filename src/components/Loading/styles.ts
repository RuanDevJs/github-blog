import styled, { keyframes } from "styled-components";

const Up = keyframes`
  from {
    opacity: 0.72;
    transform: translateY(-20px);
    background-color: #0B1B2B;
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    background-color: #3294F8;
  }
`;

export const Container = styled.div`
  width: 320px;
  margin: 2rem auto;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Dot = styled.div`
  display: block;

  width: 15px;
  height: 15px;

  background-color: ${({ theme }) => theme.colors["blue"]};
  border-radius: 50px;

  animation: ${Up} 0.75s infinite alternate;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    animation-delay: 0.4s;
  }

  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;
