import React, { useState } from 'react';

import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { atom, useRecoilState } from 'recoil';

import { ArrowRight } from '@common/assets/icons/ArrowRight';
import { hoveredMainWideButtonContext } from '@modules/main/context/mainWideButtonContext';

type Props = {
  title: string;
  description: string;
};

type ContainerProps = {
  isHovered: boolean;
};

export function MainWideButton({ title, description }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Container
      isHovered={isHovered}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseOut}
    >
      <ButtonTitle>{title}</ButtonTitle>
      <DescriptionWrapper>
        <Description>{description}</Description>
        <ArrowRight />
      </DescriptionWrapper>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  max-width: 100vw;
  height: 19.2rem;
  &:hover {
    transition: 0.1s ease-out;
  }
  background-color: ${(props) =>
    props.isHovered ? props.theme.colors.primary : props.theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.onSurface};
  border-bottom-style: solid;
  align-items: center;
`;

const ButtonTitle = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-left: ${(props) => props.theme.spacing[8]};
  font-size: ${(props) => props.theme.fontSize.headline1};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-left: ${(props) => props.theme.spacing[6]};
  padding-right: ${(props) => props.theme.spacing[8]};
`;

const Description = styled.div`
  width: 45%;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${(props) => props.theme.fontSize.body2};
`;
