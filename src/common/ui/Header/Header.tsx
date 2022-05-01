import React from 'react';

import styled from '@emotion/styled';

import { Marquee } from './components/Marquee/Marquee';
import { Navigator } from './components/Navigator/Navigator';

export default function Header() {
  return (
    <Container>
      <Navigator />
      <Marquee />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.4rem;
`;
