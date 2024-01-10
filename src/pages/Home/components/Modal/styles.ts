import styled, { css } from "styled-components";

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  width: 100%;

  border-radius: 8px;

  margin-top: -80px;
  padding: 0 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  /* max-width: 760px; */
  padding: 1rem 2rem;

  margin: 0 auto;
  gap: 2rem;
`;

export const ProfilePicture = styled.div`
  img {
    width: 260px;
    height: 160px;

    object-fit: cover;
    border-radius: 8px;

    margin: 0 auto;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .profile-top p {
    ${({ theme }) => css`
      font-weight: ${theme["font-weight"].regular};
      color: ${theme.colors["base-text"]};
      transition: 0.32s ease-in-out;
    `}
  }

  .profile-top p:hover {
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;

export const ProfileHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    ${({ theme }) => css`
      font-weight: ${theme["font-weight"].bold};
      color: ${theme.colors["base-title"]};
    `}
  }

  a {
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
  }

  margin-bottom: 4px;
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
