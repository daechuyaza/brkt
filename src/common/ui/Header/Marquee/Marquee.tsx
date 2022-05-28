import React from 'react';

import styled from '@emotion/styled';

export function Marquee() {
  return (
    <Outer>
      <Span>
        BRKT는 프론트엔드 개발자를 위한 공간입니다. 이곳에서 우리는 각자의 지식을 나눕니다. 함께
        보고, 함께 읽고, 함께 쓰면서요. BRKT는 프론트엔드 개발자를 위한 공간입니다. 이곳에서 우리는
        각자의 지식을 나눕니다. 함께 보고, 함께 읽고, 함께 쓰면서요.
      </Span>
    </Outer>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 100vw;
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

const Outer = styled.div`
  display: flex;
  max-width: 100vw;
  flex: 2 1 0;
  align-items: center;

  width: 178ch;

  font-size: 2.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  overflow: hidden;

  color: ${(props) => props.theme.colors.onSurface};
`;

const Span = styled.span`
  display: inline-block;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.onSurface};
  width: 178ch;
  text-shadow: 178ch 0 currentColor, calc(178ch * 2) 0 currentColor, calc(178ch * 3) 0 currentColor,
    calc(178ch * 4) 0 currentColor;

  will-change: transform;
  animation: marquee 65s linear infinite;
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
