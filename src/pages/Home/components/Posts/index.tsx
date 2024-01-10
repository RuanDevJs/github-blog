import Loading from "../../../../components/Loading";
import useFetch from "../../../../hooks/useFetch";
import Post from "../Post";
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

export default function Posts() {
  const { data, loading } = useFetch<IPosts[]>("http://localhost:3000/posts");

  if (loading) return <Loading />;

  return (
    <Styled.Container>
      <Styled.Form>
        <div className="label">
          <label htmlFor="input">Publications</label>
          <p>4 Publications</p>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search Content"
            id="input"
            name="input"
          />
        </div>
      </Styled.Form>
      <Styled.Posts>
        {data?.map((post) => (
          <Post data={post} key={post.id} />
        ))}
      </Styled.Posts>
    </Styled.Container>
  );
}
