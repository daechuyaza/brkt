import React from 'react';

import styled from '@emotion/styled';

export function Landing() {
  return <Button>Landing</Button>;
}

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
