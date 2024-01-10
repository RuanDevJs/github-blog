import styled from "styled-components";
import Cover from "../../assets/Cover.webp";

export const Header = styled.header`
  width: 100%;
  background: ${`url(${Cover})`} no-repeat center center;
  background-size: cover;
  height: 220px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;

  height: 100%;
  gap: 8px;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme["font-weight"].regular};
  font-size: ${({ theme }) => theme["font-size"].x_lg};
  color: ${({ theme }) => theme["colors"].blue};
  text-transform: uppercase;
`;
