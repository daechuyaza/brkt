import React from 'react';

import styled from '@emotion/styled';

import { Navigator } from './components/Navigator/Navigator';

export default function Header() {
  return (
    <Container>
      <Navigator />
      <LowerWrapper />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.4rem;
`;

const LowerWrapper = styled.div`
  flex: 2 1 0;
  border-bottom: 1px solid black;
`;
