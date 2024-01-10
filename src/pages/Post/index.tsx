import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Modal from "./Modal";

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

export default function Post() {
  const postId = useParams();
  const { data, loading } = useFetch<IPosts>(
    `http://localhost:3000/posts/${postId.id}`
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Styled.Container>
      <Modal />
      <Styled.Description>
        <span>{data?.description.slice(0, 110)}</span>
        {data?.description.slice(110)}
      </Styled.Description>
      <Styled.Content className="content">
        <h2>{data?.content.title}</h2>
        <p>{data?.content.content}</p>
        <Styled.Code>
          <div>
            <code className="var">let</code>
            <code>
              <span>foo = </span>
              <span className="value">42</span>
              <span className="comment">// foo is now a number</span>
            </code>
          </div>
          <div>
            <code>
              <span>foo = </span>
              <span className="value">'bar'</span>
              <span className="comment">// foo is now a string</span>
            </code>
          </div>
          <div>
            <code>
              <span>foo =</span>
              <span className="value"> true</span>
              <span className="comment">// foo is now a boolean</span>
            </code>
          </div>
        </Styled.Code>
      </Styled.Content>
    </Styled.Container>
  );
}
