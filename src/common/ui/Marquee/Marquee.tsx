import styled from '@emotion/styled';
import React from 'react';

/**
 * TODO mediaquery로 ch 단위 촘촘하게 핸들링하기
 */

export function Marquee() {
  return (
    <Container>
      <MarqueeText>
        BRKT는 프론트엔드 개발자를 위한 공간입니다. 이곳에서 우리는 각자의 지식을 나눕니다. 함께
        보고, 함께 읽고, 함께 쓰면서요.
      </MarqueeText>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0;
`;

const MarqueeText = styled.span`
  position: absolute;
  display: inline-block;
  align-self: center;

  width: 90ch;
  text-shadow: 90ch 0 black, 180ch 0 black;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSize.subtitle1};
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};

  will-change: transform;
  animation: marquee 40s linear infinite;
  animation-play-state: running;
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
