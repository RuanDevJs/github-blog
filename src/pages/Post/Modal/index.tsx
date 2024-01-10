import {
  ArrowLeft,
  CalendarBlank,
  Chat,
  GithubLogo,
  Link,
} from "phosphor-react";
import * as Styled from "./styles";

export default function Modal() {
  return (
    <Styled.Modal>
      <Styled.Container>
        <Styled.Menu>
          <Styled.BackLink to="/">
            <ArrowLeft />
            Back
          </Styled.BackLink>
          <Styled.Link href="https://github.com/RuanDevJs">
            GITHUB
            <Link size={18} />
          </Styled.Link>
        </Styled.Menu>
        <Styled.Title>JavaScript data types and data structures</Styled.Title>
        <Styled.ProfileFooter>
          <a href="https://github.com/RuanDevJs">
            <GithubLogo size={18} />
            RuanDevJs
          </a>
          <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
            <CalendarBlank size={18} />1 Day Ago
          </a>
          <a href="https://github.com/RuanDevJs">
            <Chat size={18} />5 Commentaries
          </a>
        </Styled.ProfileFooter>
      </Styled.Container>
    </Styled.Modal>
  );
}
