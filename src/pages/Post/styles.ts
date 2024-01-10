import styled, { css } from "styled-components";

export const Container = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-columns: 820px;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme["font-size"].md};
  font-weight: ${({ theme }) => theme["font-weight"].regular};
  color: ${({ theme }) => theme["colors"]["base-text"]};
  line-height: 1.5rem;

  margin: 1rem 0;
  padding: 0 1rem;

  span {
    font-weight: ${({ theme }) => theme["font-weight"].bold};
  }
`;

export const Content = styled.div`
  padding: 0 1rem;

  h2 {
    ${({ theme }) => css`
      font-size: ${theme["font-size"].md};
      font-weight: ${theme["font-weight"].bold};
      color: ${theme.colors["blue"]};

      display: flex;
      align-items: center;
      gap: 4px;

      text-transform: capitalize;

      text-decoration: underline;
      text-underline-offset: 4px;
      transition: 0.32s ease-in-out;

      margin-bottom: 8px;
    `}
  }

  p {
    font-size: ${({ theme }) => theme["font-size"].md};
    font-weight: ${({ theme }) => theme["font-weight"].regular};
    color: ${({ theme }) => theme["colors"]["base-text"]};
    line-height: 1.5rem;
  }
`;

export const Code = styled.pre`
  margin-top: 1rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors["base-post"]};
  border-radius: 4px;

  .var {
    color: ${({ theme }) => theme.colors["blue"]};
  }

  .value {
    width: 20px;
    color: #6ad445;
    margin-right: 4px;

    &::after {
      content: ";";
      margin-left: 0;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }

  .comment {
    color: #4f6173;
    margin-left: 20px;
  }

  code {
    color: white;
    margin-left: 8px;
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 5px;
  }

  transition: 0.32s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(1.32);
  }
`;
