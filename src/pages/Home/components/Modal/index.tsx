import { GithubLogo, Link, LinkedinLogo, Users } from "phosphor-react";
import useFetch from "../../../../hooks/useFetch";
import * as Styled from "./styles";

interface IResponse {
  avatar_url: string;
  followers: number;
}

export default function Modal() {
  // const { data, loading, error } = useFetch<IResponse>(
  //   "https://api.github.com/users/RuanDevJs"
  // );

  // if (loading) {
  //   return null;
  // }

  return (
    <Styled.Modal>
      <Styled.Container>
        <Styled.ProfilePicture className="profile-picture">
          <img
            src={"https://avatars.githubusercontent.com/u/82915279?v=4"}
            alt="Profile Picture"
          />
        </Styled.ProfilePicture>
        <Styled.ProfileInfo>
          <div className="profile-top">
            <Styled.ProfileHeading>
              <h2>Ruan Vitor</h2>
              <a href="https://github.com/RuanDevJs">
                GITHUB
                <Link size={18} />
              </a>
            </Styled.ProfileHeading>

            <p>
              I'm 19 years old and since my childhood I'm in love with
              technologies. Here you can see my works as Front-End Develolper.
              🖥️
            </p>
          </div>

          <Styled.ProfileFooter>
            <a href="https://github.com/RuanDevJs">
              <GithubLogo size={18} />
              RuanDevJs
            </a>
            <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
              <LinkedinLogo size={18} />
              Open To Work
            </a>
            <a href="https://github.com/RuanDevJs">
              <Users size={18} />3 Followers
            </a>
          </Styled.ProfileFooter>
        </Styled.ProfileInfo>
      </Styled.Container>
    </Styled.Modal>
  );
}
