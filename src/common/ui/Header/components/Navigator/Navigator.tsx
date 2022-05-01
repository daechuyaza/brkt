import React from 'react';

import styled from '@emotion/styled';

import { DarkMode } from 'common/assets/icons/DarkMode';
import { Logo } from 'common/assets/icons/Logo';
import { Search } from 'common/assets/icons/Search';

export function Navigator() {
  return (
    <Container>
      <LeftWrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <NavigatorButtonsBox>
          <AboutButton>About Us</AboutButton>
          <ContactButton>Contact</ContactButton>
        </NavigatorButtonsBox>
      </LeftWrapper>
      <RightWrapper>
        <SubButtonsBox>
          <Search />
          <DarkMode />
        </SubButtonsBox>
        <LoginButton>LOGIN</LoginButton>
      </RightWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2 1 0;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-right: ${(props) => props.theme.spacing[5]};
  padding-left: ${(props) => props.theme.spacing[5]};
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const RightWrapper = styled.div`
  display: flex;
  height: '100%';
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 11.6rem;
  height: '100%';
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const NavigatorButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.9rem;
  height: '100%';
`;

const AboutButton = styled.a`
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const ContactButton = styled.a`
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const SubButtonsBox = styled.div`
  display: flex;
  align-self: center;
  min-width: 10rem;
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const LoginButton = styled.a`
  align-self: center;
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
