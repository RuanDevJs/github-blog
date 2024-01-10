import Modal from "./components/Modal";
import Posts from "./components/Posts";

import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Container>
      <Modal />
      <Posts />
    </Styled.Container>
  );
}
