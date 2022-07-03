import React from 'react';

import styled from '@emotion/styled';

import { ArrowRight } from '@common/assets/icons/ArrowRight';

type Props = {
  title: string;
  description: string;
};

export function MainWideButton({ title, description }: Props) {
  return (
    <Container>
      <ButtonTitle>{title}</ButtonTitle>
      <DescriptionWrapper>
        <Description>{description}</Description>
        <ArrowRight />
      </DescriptionWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  max-width: 100vw;
  height: 14.2rem;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.onSurface};
  border-bottom-style: solid;
  align-items: center;
`;

const ButtonTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.theme.spacing[8]};
  font-size: ${(props) => props.theme.fontSize.headline2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;

  white-space: nowrap;
  overflow: hidden;

  width: 50%;
  height: 100%;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.spacing[6]};
  padding-right: ${(props) => props.theme.spacing[8]};
  width: 50%;
  height: 100%;
`;

const Description = styled.div`
  width: 70%;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${(props) => props.theme.fontSize.body2};
`;
