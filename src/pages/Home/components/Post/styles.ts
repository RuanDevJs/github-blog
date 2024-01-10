import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["base-profile"]};

  transition: 0.24s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }

  & > p {
    font-size: ${({ theme }) => theme["font-size"].sm};
    font-weight: ${({ theme }) => theme["font-weight"].regular};
    color: ${({ theme }) => theme.colors["base-text"]};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  border-radius: 4px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme["font-size"].x_md};
  font-weight: ${({ theme }) => theme["font-weight"].bold};
  color: ${({ theme }) => theme.colors["base-title"]};

  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme["font-size"].x_sm};
  font-weight: ${({ theme }) => theme["font-weight"].regular};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;
