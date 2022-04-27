import React from 'react';

import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <UpperWrapper>
        <LogoBox />
        <UpperLeftNavigatorBox />
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
  background-color: black;
`;

const UpperLeftNavigatorBox = styled.div`
  width: 15%;
  height: '100%';
  background-color: black;
`;

const LowerWrapper = styled.div`
  flex: 2 1 0;
  border-bottom: 1px solid black;
`;
