import React from 'react';

import styled from '@emotion/styled';

import { Logo } from 'common/assets/icons/Logo';

export default function Header() {
  return (
    <Container>
      <UpperWrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <UpperLeftNavigatorBox></UpperLeftNavigatorBox>
      </UpperWrapper>
      <LowerWrapper />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.4rem;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex: 2 1 0;
  border-bottom: 1px solid black;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  width: 11.6rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 2.4rem;
  height: '100%';
  background-color: ${(props) => props.theme.colors.error};
`;

const UpperLeftNavigatorBox = styled.div`
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  width: 8%;
  padding: 0.4rem;
  height: '100%';
`;

const LowerWrapper = styled.div`
  flex: 2 1 0;
  border-bottom: 1px solid black;
`;
