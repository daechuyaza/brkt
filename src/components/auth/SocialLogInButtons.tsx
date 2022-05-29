import styled from '@emotion/styled';

import { GithubLogo } from '@common/assets/icons/GithubLogo';
import { GoogleLogo } from '@common/assets/icons/GoogleLogo';

export function SocialLogInButtons() {
  return (
    <Container>
      <SocialLogInbutton>
        <GithubLogo />
      </SocialLogInbutton>
      <SocialLogInbutton>
        <GoogleLogo />
      </SocialLogInbutton>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const SocialLogInbutton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  outline: none;
  padding: 0;
`;
