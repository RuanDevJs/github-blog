import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  width: 100%;

  border-radius: 8px;

  margin-top: -80px;
  padding: 0 8px;

  transition: 0.32s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(1.15);
  }
`;

export const Container = styled.div`
  padding: 1rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackLink = styled(NavLink)`
  font-weight: 400;
  font-size: ${({ theme }) => theme["font-size"].x_sm};
  color: ${({ theme }) => theme["colors"].blue};

  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  transition: 0.32s;
  text-transform: capitalize;

  &:hover {
    filter: brightness(0.72);
  }
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme["font-size"].x_sm};
    font-weight: ${theme["font-weight"].bold};
    color: ${theme.colors["blue"]};

    display: flex;
    align-items: center;
    gap: 4px;

    text-transform: uppercase;

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-border"]};
    transition: 0.32s ease-in-out;
  `}

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors["blue"]};
    transition: 0.32s ease-in-out;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme["font-size"].x_lg};
    font-weight: ${theme["font-weight"].bold};
    color: ${theme.colors["base-title"]};

    display: flex;
    align-items: center;
    gap: 4px;

    text-transform: capitalize;
    transition: 0.32s ease-in-out;
    margin: 1rem 0;
  `}

  &:hover {
    filter: brightness(0.72);
    transition: 0.32s ease-in-out;
  }
`;

export const ProfileFooter = styled.div`
  display: flex;
  margin-top: auto;
  padding-top: auto;
  gap: 12px;

  a {
    ${({ theme }) => css`
      font-size: ${theme["font-size"].x_sm};
      font-weight: ${theme["font-weight"].bold};
      color: ${theme.colors["blue"]};

      display: flex;
      align-items: center;
      gap: 4px;

      text-transform: capitalize;

      border-bottom: 1px solid ${({ theme }) => theme.colors["base-profile"]};
      transition: 0.32s ease-in-out;
    `}

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors["blue"]};
      transition: 0.32s ease-in-out;
    }
  }
`;
