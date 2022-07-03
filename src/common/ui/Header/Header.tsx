import styled from '@emotion/styled';
import React from 'react';

import { Marquee } from '../Marquee/Marquee';

import { Navigator } from './Navigator/Navigator';

export function Header() {
  return (
    <Container>
      <Navigator />
    </Container>
  );
}

/**
 * TODO laptop 기준 120rem
 * 차후 미디어 쿼리 훅을 추가해야 합니다.
 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
