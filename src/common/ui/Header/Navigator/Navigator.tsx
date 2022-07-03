import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { DarkMode } from '@common/assets/icons/DarkMode';
import { Logo } from '@common/assets/icons/Logo';
import { Search } from '@common/assets/icons/Search';
import { ROUTES } from '@common/constants/hardCoded';

export function Navigator() {
  const router = useRouter();

  return (
    <Container>
      <LeftWrapper>
        <Link href={ROUTES.MAIN} passHref>
          <LogoBox>
            <Logo />
          </LogoBox>
        </Link>
        <NavigatorButtonsBox>
          <Link href={ROUTES.ABOUT} passHref>
            <AboutButton>About Us</AboutButton>
          </Link>
          <Link href={ROUTES.SUBSCRIBE} passHref>
            <SubscribeButton>Subscribe</SubscribeButton>
          </Link>
        </NavigatorButtonsBox>
      </LeftWrapper>
      <RightWrapper>
        <SubButtonsBox>
          <Search />
          <DarkMode />
        </SubButtonsBox>
        <Link href={`${router.pathname}?auth=login`} as={ROUTES.LOG_IN} passHref>
          <LogInButton>LOGIN</LogInButton>
        </Link>
      </RightWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.onSurface};
  border-bottom-style: solid;
  padding-right: ${(props) => props.theme.spacing[5]};
  padding-left: ${(props) => props.theme.spacing[5]};
  color: ${(props) => props.theme.colors.onSurface};
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
`;

const RightWrapper = styled.div`
  display: flex;
  height: '100%';
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 1;
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
  cursor: pointer;
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-right: ${(props) => props.theme.spacing[5]};
  white-space: nowrap;
`;

const SubscribeButton = styled.a`
  cursor: pointer;
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const SubButtonsBox = styled.div`
  display: flex;
  align-self: center;
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const LogInButton = styled.a`
  align-self: center;
  cursor: pointer;
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
