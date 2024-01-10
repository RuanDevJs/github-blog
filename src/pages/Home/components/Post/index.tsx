import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

interface IPosts {
  id: number;
  title: string;
  description: string;
  commentary: number;
  content: {
    title: string;
    content: string;
  };
}

interface IProps {
  data: IPosts;
}

export default function Post({ data }: IProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/post/${data.id}`);
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Heading>
        <Styled.Title>{data.title}</Styled.Title>
        <Styled.Date>1 Day Ago</Styled.Date>
      </Styled.Heading>
      <p>{data.description}</p>
    </Styled.Container>
  );
}
