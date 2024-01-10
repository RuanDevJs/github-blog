import { useTheme } from "styled-components";
import { Terminal } from "phosphor-react";

import * as Styled from "./styles";

export default function Header() {
  const theme = useTheme();

  return (
    <Styled.Header>
      <Styled.Container>
        <Terminal size={32} color={theme.colors.blue} />
        <Styled.Title>Github Blog</Styled.Title>
      </Styled.Container>
    </Styled.Header>
  );
}
