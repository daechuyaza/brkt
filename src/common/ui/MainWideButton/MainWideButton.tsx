import React from 'react';

import styled from '@emotion/styled';

export function MainWideButton() {
  return (
    <Container>
      <ButtonTitleWrapper>Article</ButtonTitleWrapper>
      <SubDescriptionWrapper></SubDescriptionWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  height: 19.2rem;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.onSurface};
  border-bottom-style: solid;
  align-items: center;
  background-color: green;
`;

const ButtonTitleWrapper = styled.div`
  padding-left: ${(props) => props.theme.spacing[8]};

  width: 50%;
  height: 100%;
  background-color: red;
`;

const SubDescriptionWrapper = styled.div`
  padding-left: ${(props) => props.theme.spacing[6]};
  width: 50%;
  height: 100%;
`;
