import styled, { css } from "styled-components";

export const Container = styled.section`
  margin-top: 2rem;
  width: 100%;
`;

export const Form = styled.div`
  width: 100%;

  .label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;
  }

  .label > label {
    ${css`
      font-size: ${({ theme }) => theme["font-size"].x_md};
      font-weight: ${({ theme }) => theme["font-weight"].bold};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    `}
  }

  .label > p {
    ${css`
      font-size: ${({ theme }) => theme["font-size"].sm};
      font-weight: ${({ theme }) => theme["font-weight"].regular};
      color: ${({ theme }) => theme.colors["base-span"]};
    `}
  }

  .input {
    width: 100%;
  }

  .input > input {
    width: 805px;
    height: 45px;
    padding: 4px 8px;

    border-radius: 4px;
    border: 0;

    background-color: ${({ theme }) => theme.colors["base-input"]};

    font-size: ${({ theme }) => theme["font-size"].md};
    font-weight: ${({ theme }) => theme["font-weight"].regular};
    color: ${({ theme }) => theme["colors"]["base-subtitle"]};

    outline: 0;
  }

  input::placeholder {
    color: "#3A536B";
  }
`;

export const Posts = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
