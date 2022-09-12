import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search, Moon } from 'react-feather';

import { Logo } from '@common/assets/icons/Logo';
import { ROUTES } from '@common/constants/hardCoded';

export function Navigator() {
  const router = useRouter();

  /**
   * TODO
   * 상의 후 네비게이터 버튼 삭제
   */

  return (
    <Container>
      <LeftWrapper>
        <Link href={ROUTES.MAIN} passHref>
          <LogoBox>
            <Logo />
          </LogoBox>
        </Link>
        <NavigatorButtonsBox>
          {/* <Link href={ROUTES.ABOUT} passHref>
            <AboutButton>About Us</AboutButton>
          </Link>
          <Link href={ROUTES.SUBSCRIBE} passHref>
            <SubscribeButton>Subscribe</SubscribeButton>
          </Link> */}
        </NavigatorButtonsBox>
      </LeftWrapper>
      <RightWrapper>
        <SubButtonsBox>
          <Search fill={'#232323'} />
          <WhiteSpace />
          <Moon fill={'#232323'} />
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
  border-bottom-color: ${(props) => props.theme.colors.secondary};
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
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  width: 9.51rem;
  height: '100%';
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const NavigatorButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.9rem;
  height: '100%';
  background-color: 'blue';
`;

const AboutButton = styled.a`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.subtitle1};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-right: ${(props) => props.theme.spacing[5]};
  white-space: nowrap;
  background-color: 'blue';
`;

const SubscribeButton = styled.a`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.subtitle1};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const SubButtonsBox = styled.div`
  display: flex;
  align-self: center;
  margin-right: ${(props) => props.theme.spacing[5]};
`;

const WhiteSpace = styled.div`
  width: 1.1rem;
  height: 100%;
`;

const LogInButton = styled.a`
  align-self: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.subtitle1};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
