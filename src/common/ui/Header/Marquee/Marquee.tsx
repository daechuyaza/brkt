import React from 'react';

import styled from '@emotion/styled';

export function Marquee() {
  return (
    <Container>
      는 프론트엔드 개발자를 위한 공간입니다. 이곳에서 우리는 각자의 지식을 나눕니다. 함께 보고,
      함께 읽고, 함께 쓰면서요. BRKT는 프론트엔드 개발자를 위한 공간입니다. 이곳에서 우리는 각자의
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2 1 0;
  align-items: center;
  font-size: 2.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.onSurface};
  border-bottom-style: solid;
  color: ${(props) => props.theme.colors.onSurface};
`;
